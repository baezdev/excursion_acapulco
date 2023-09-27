<script>
  import { includes } from "../../data/prices.json";

  export let person;
</script>

<article class="flex flex-col gap-5 mt-10 md:grid-cols-3 md:grid md:gap-10">
  {#each person as info}
    <a
      href="/reserve"
      class="px-6 py-10 transition-all duration-200 border border-gray-400 cursor-pointer border-opacity-30 rounded-xl group md:hover:scale-105 hover:border-primary hover:border-opacity-100"
    >
      <h4
        class="mb-3 text-2xl font-medium animate-fade animate-once animate-ease-in-out"
      >
        Habitación para {info.for} personas
      </h4>
      <p
        class="mb-5 text-4xl font-semibold animate-fade animate-once animate-ease-in-out"
      >
        <span class="text-primary">$</span>{info.price}
        <span class="text-lg font-normal">/por persona</span>
      </p>
      <p class="text-xl font-medium">Incluye:</p>
      <ul class="pl-3 list-inside">
        {#each includes as point}
          <li
            class="leading-8 before:content-[''] before:bg-[url(/images/done.svg)] before:w-6 before:h-6 before:bg-cover before:-left-0 before:items-center flex items-center gap-1"
          >
            {point}
          </li>
        {/each}
      </ul>
    </a>
  {/each}
</article>
