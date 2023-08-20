<script>
  import Container from "./Container.svelte";
  import NavLinks from "./NavLinks.svelte";
  import CloseIcon from "./icons/CloseIcon.svelte";
  import MenuIcon from "./icons/MenuIcon.svelte";

  let navbarIsOpen = false;

  const toggleNavbarIsOpen = () => {
    navbarIsOpen = !navbarIsOpen;
  }

  const closeNavbar = () => {
    navbarIsOpen = false;
  }
</script>

<nav class="fixed top-0 z-50 w-full text-font backdrop-blur-xl">
  <Container>
    <div
      class={`relative flex items-center justify-between h-[60px] border-b border-gray-400 border-opacity-30 ${
        navbarIsOpen ? "border-transparent" : "border-gray-400"
      }`}
    >
      <a href="/"><h1 class="text-lg font-bold md:text-xl">🌴 Vamos a Acapulco</h1></a>
      <NavLinks navbarIsOpen={navbarIsOpen} closeNavbar={closeNavbar} />
      <button
        class="flex items-center justify-center md:hidden w-9 h-9"
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
