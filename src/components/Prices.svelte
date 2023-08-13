<script>
  import { twMerge } from "tailwind-merge";
  import { includes, prices } from "../data/prices.json";
  import { baseStyle } from "../styles/button";
  import Container from "./Container.svelte";
  import Separator from "./Separator.svelte";

  let activeKindOfPerson = "adultos";
  const { adults, children } = prices;
  const kindOfPerson = ["adultos", "niños"];

  const toggleKindOfPerson = (person) => {
    activeKindOfPerson = person;
  };
</script>

<Separator />
<section class="py-16 text-font" id="prices">
  <Container>
    <h2 class="font-bold text-font text-3xl md:text-6xl mb-10">Precios</h2>
    <main>
      <div class="flex gap-3 w-80 mx-auto justify-center">
        {#each kindOfPerson as person}
          <button
            class={twMerge(
              baseStyle,
              `${
                person === activeKindOfPerson
                  ? "text-primary before:bg-primary before:bg-opacity-20 md:text-lg text-3xl mx-0"
                  : "text-font before:bg-secondary md:text-lg text-3xl mx-0"
              }`
            )}
            on:click={() => toggleKindOfPerson(person)}
          >
            {person}
          </button>
        {/each}
      </div>
      <article class="grid grid-cols-3 gap-10 mt-10">
        {#each adults as info}
          <div class="border border-gray-400 border-opacity-30 px-6 py-10 rounded-xl group hover:scale-105 transition-all duration-200 cursor-pointer hover:border-primary hover:border-opacity-100">
            <h4 class="font-medium text-2xl mb-3">
              Habitación para {info.for} personas
            </h4>
            <p class="font-semibold text-4xl mb-5">
              <span class="text-primary">$</span>{info.price}
              <span class="text-lg font-normal">/por persona</span>
            </p>
            <p class="text-xl font-medium">Incluye:</p>
            <ul class="list-inside pl-3">
              {#each includes as point}
                <li class="leading-8 before:content-[''] before:bg-[url(/images/done.svg)] before:w-6 before:h-6 before:bg-cover before:-left-0 before:items-center flex items-center gap-1">{point}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </article>
    </main>
  </Container>
</section>
