<script>
  import { prices } from "../../data/prices.json";
  import Container from "../ui/Container.svelte";
  import Separator from "../ui/Separator.svelte";
  import ButtonsSelectors from "./ButtonsSelectors.svelte";
  import PricesCards from "./PricesCards.svelte";

  let activeKindOfPerson = "adultos";
  const { adults, children } = prices;

  const toggleKindOfPerson = (person) => {
    activeKindOfPerson = person;
  }

</script>

<Separator />
<section class="py-16 text-font" id="prices">
  <Container>
    <h2 class="mb-10 text-3xl font-bold text-font md:text-6xl">Precios</h2>
    <main>
      <ButtonsSelectors
        active={activeKindOfPerson}
        toggleActive={toggleKindOfPerson} 
      />
      {#if activeKindOfPerson === "adultos"}
        <PricesCards person={adults} />
      {:else}
        <PricesCards person={children} />
      {/if}
    </main>
  </Container>
</section>
