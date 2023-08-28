<script>
  import Container from "../ui/Container.svelte";
  import PointsToReserve from "./PointsToReserve.svelte";
  import ReserveForm from "./ReserveForm.svelte";
</script>

<section class="pt-24 text-font">
  <Container>
    <main class="flex gap-10 items-center">
      <article class="w-1/2 h-max">
        <h2 class="mb-5 text-3xl font-bold md:text-5xl">
          <span class="text-primary">¡Prepara las Maletas!</span> Reserva tu Escapada
          a Acapulco
        </h2>
        <p class="text-lg">
          Para hacer la reservacion debes de condiderar los siguientes puntos
        </p>
        <PointsToReserve />
      </article>
      <ReserveForm />
    </main>
  </Container>
</section>
