<script>
  export let href = ''
  export let text = ''
  export let closeNavbar
</script>
<!-- svelte-ignore a11y-interactive-supports-focus -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-attribute -->
<a
  on:click|preventDefault={() => {
    closeNavbar()
    document.location.href = href
  }}
  role="button"
  class="relative z-10 px-3 md:py-[5px] py-3 font-medium rounded-md capitalize transition-all duration-200 w-fit mx-auto before:content-[''] before:w-full before:h-full before:bg-transparent before:scale-75 hover:before:bg-secondary before:block before:absolute before:top-0 before:rounded-md hover:before:bg-opacity-75 before:-z-10 before:left-0 hover:before:scale-110 before:transition-all before:duration-300"
>
  {text}
</a>