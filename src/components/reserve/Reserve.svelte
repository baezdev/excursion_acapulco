<script>
  import Container from "../ui/Container.svelte";
  import PointsToReserve from "./PointsToReserve.svelte";
  import ReserveForm from "./ReserveForm.svelte";
</script>

<section class="pt-24 text-font">
  <Container>
    <main class="flex flex-col items-center gap-10 md:flex-row animate-fade animate-once animate-ease-in-out">
      <article class="md:w-1/2 h-max">
        <h2 class="mb-5 text-3xl font-bold md:text-5xl">
          <span class="text-primary">¡Prepara las Maletas!</span> Reserva tu Escapada
          a Acapulco
        </h2>
        <p class="text-lg">
          Para hacer la reservación debes de considerar los siguientes puntos
        </p>
        <PointsToReserve />
      </article>
      <ReserveForm />
    </main>
  </Container>
</section>
