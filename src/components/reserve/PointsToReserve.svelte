<script>
  const pointsToReserve = [
    {
      title: "Reserva",
      description:
        "Para confirmar tu reserva, se requerirá un depósito del 15% del precio total de la excursión.",
      image: "money",
    },
    {
      title: "Pago completo",
      description:
        "El pago completo debe realizarse 15 días antes de la fecha de la excursión.",
      image: "hand-cash",
    },
    {
      title: "Términos y condiciones",
      description:
        "Si quieres saber más, revisa nuestros <a href='/termsAndConditions' class='font-semibold text-primary'>términos y condiciones.</a>",
      image: "book",
    },
  ];
</script>

<article class="flex flex-col gap-4 mt-6 md:mt-12">
  {#each pointsToReserve as { title, image, description }}
    <div class="flex items-center gap-4 pr-10 md:pr-28">
      <picture
        class="flex items-center justify-center bg-primary rounded-2xl w-14 h-14"
      >
        <img
          src={`/icons/${image}.svg`}
          alt={title}
          loading="lazy"
          class="w-7"
        />
      </picture>
      <div class="flex-1">
        <p class="text-lg font-semibold">{title}</p>
        <p>{@html description}</p>
      </div>
    </div>
  {/each}
</article>
