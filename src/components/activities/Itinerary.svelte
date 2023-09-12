<script>
  import ActivitiesList from "./ActivitiesList.svelte";
  import Container from "../ui/Container.svelte";
  import Separator from "../ui/Separator.svelte";
</script>

<Separator />
<section class="py-16" id="itinerary">
  <Container>
    <h2 class="mb-10 text-3xl font-bold text-font md:text-6xl">Itinerario</h2>
    <ActivitiesList />
  </Container>
</section>
