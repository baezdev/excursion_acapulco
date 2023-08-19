<script>
  import { twMerge } from "tailwind-merge";
  import { baseStyle } from "../../styles/button";

  export let active;
  export let toggleActive;
  const kindOfPerson = ["adultos", "niños"];
</script>

<div class="flex justify-center gap-3 mx-auto w-80">
  {#each kindOfPerson as person}
    <button
      class={twMerge(
        baseStyle,
        `${
          person === active
            ? "text-primary before:bg-primary before:bg-opacity-20 text-lg mx-0"
            : "text-font before:bg-white text-lg mx-0"
        }`
      )}
      on:click={() => toggleActive(person)}
    >
      {person}
    </button>
  {/each}
</div>
