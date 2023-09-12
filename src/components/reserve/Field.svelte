<script>
  export let fieldValue;
  export let name;
  export let type = "text";
  export let placeholder;
  export let label;
  export let error;

  const fieldStyle =
    "py-1 font-semibold appearance-none focus:outline-none text-font placeholder:text-gray-400 w-full";
</script>

<div class="flex-1">
  <div
    class="flex flex-col transition-all duration-200 border-b-2 border-b-gray-400 border-opacity-30 focus-within:border-primary focus-within:border-opacity-100 group"
  >
    <label
      for={name}
      class="font-semibold transition-all duration-200 text-font group-focus-within:text-primary"
      >{label}</label
    >
    {#if type === "text"}
      <input
        bind:value={fieldValue}
        type="text"
        class={fieldStyle}
        {placeholder}
        {name}
      />
    {:else if type === "number"}
      <input
        bind:value={fieldValue}
        type="number"
        class={fieldStyle}
        {placeholder}
        {name}
        on:input
      />
    {/if}
  </div>
  {#if error}
    <p class="mt-1 text-sm font-medium text-red-500 animate-fade animate-once animate-ease-in-out">{error}</p>
  {/if}
</div>
