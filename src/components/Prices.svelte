<script>
  import { prices } from "../data/prices.json";
  import Container from "./Container.svelte";
  import Separator from "./Separator.svelte";
  import ButtonsSelectors from "./prices/ButtonsSelectors.svelte";
  import PricesCards from "./prices/PricesCards.svelte";

  let activeKindOfPerson = "adultos";
  const { adults, children } = prices;

  const toggleKindOfPerson = (person) => {
    activeKindOfPerson = person;
  }

</script>

<Separator />
<section class="py-16 text-font" id="prices">
  <Container>
    <h2 class="font-bold text-font text-3xl md:text-6xl mb-10">Precios</h2>
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
