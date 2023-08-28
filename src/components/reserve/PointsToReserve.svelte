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
        "Si quieres saber mas, revisa nuestros <a href='terminos' class='text-primary font-semibold'>terminos y condiciones</a>",
      image: "book",
    },
  ];
</script>

<article class="mt-12 flex flex-col gap-4">
  {#each pointsToReserve as { title, image, description }}
    <div class="flex gap-4 items-center pr-28">
      <picture
        class="bg-primary flex rounded-2xl w-14 h-14 justify-center items-center"
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
