<script>
  import ActivitiesList from "./ActivitiesList.svelte";
  import Container from "./Container.svelte";
  import Separator from "./Separator.svelte";
</script>

<Separator />
<section class="py-16" id="itinerary">
  <Container>
    <h2 class="font-bold text-font text-3xl md:text-6xl mb-10">Itinerario</h2>
    <ActivitiesList />
  </Container>
</section>
