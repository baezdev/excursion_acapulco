<script>
  import itinerary from "../data/itinerary.json";
  import Activity from "./Activity.svelte";
</script>

<article>
  {#each itinerary as { day, activities }}
    <p class="font-semibold text-xl md:text-3xl mb-7 md:ml-32">{day}</p>
    <ul
      class="mx-auto w-11/12 md:w-max flex flex-col gap-4 border-l-[3px] border-dashed border-gray-500 border-opacity-40 mb-16"
    >
      {#each activities as act}
        <Activity {...act} />
      {/each}
    </ul>
  {/each}
</article>
