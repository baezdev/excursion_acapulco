<script>
  import LinkButton from "../ui/LinkButton.svelte";
  import NavLink from "./NavLink.svelte";

  export let navbarIsOpen;
  export let closeNavbar;

  const links = [
    {
      href: "#itinerary",
      text: "itinerario",
      path: "/",
    },
    {
      href: "#prices",
      text: "precios",
      path: "/",
    },
    {
      href: "#hotel",
      text: "hotel",
      path: "/",
    },
  ];

  const { pathname } = document.location;
</script>

<div
  class={`absolute flex flex-col w-full gap-10 p-10 pb-16 transition-all duration-200 top-[60px] md:top-0 border-t md:flex md:flex-row md:relative md:translate-y-0 md:translate-x-0 md:w-auto md:border-none md:p-0 bg-white md:bg-inherit ${
    navbarIsOpen
      ? "translate-x-0 border-primary"
      : "translate-x-[120%] border-transparent"
  }`}
>
  <ul
    class="flex flex-col items-center text-3xl font-medium gap-x-2 gap-y-14 md:flex-row md:text-base text-center"
  >
    {#if pathname !== '/'}
      <li class="capitalize">
        <NavLink href='/' text='inicio' {closeNavbar} />
      </li>
    {/if}
    {#each links as link}
      {#if pathname === link.path}
        <li class="capitalize">
          <NavLink href={link.href} text={link.text} {closeNavbar} />
        </li>
      {/if}
    {/each}
  </ul>
  <div class="mx-auto md:mx-0">
    <LinkButton href="/reserve" variant="secondary">quiero reservar</LinkButton>
  </div>
</div>
