<script>
  import Container from "./Container.svelte";
  import NavLinks from "./NavLinks.svelte";
  import CloseIcon from "./icons/CloseIcon.svelte";
  import MenuIcon from "./icons/MenuIcon.svelte";

  let navbarIsOpen = false;

  const toggleNavbarIsOpen = () => {
    navbarIsOpen = !navbarIsOpen;
  }
</script>

<nav class="fixed z-50 top-0 w-full text-font backdrop-blur">
  <Container>
    <div
      class={`relative flex items-center justify-between h-[60px] border-b border-gray-400 border-opacity-30 ${
        navbarIsOpen ? "border-transparent" : "border-gray-400"
      }`}
    >
      <a href="/"><h1 class="text-lg font-bold md:text-xl">🌴 Vamos a Acapulco</h1></a>
      <NavLinks navbarIsOpen={navbarIsOpen} />
      <button
        class="md:hidden w-9 h-9 flex items-center justify-center"
        on:click={toggleNavbarIsOpen}
      >
        {#if navbarIsOpen}
          <CloseIcon />
          {:else}
            <MenuIcon />
        {/if}
      </button>
    </div>
  </Container>
</nav>
