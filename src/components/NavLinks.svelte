<script>
  import LinkButton from "./LinkButton.svelte";
  import NavLink from "./NavLink.svelte"

  export let navbarIsOpen
  const links = [
    {
      href: '#horario',
      text: 'horario'
    },
    {
      href: '#hotel',
      text: 'hotel'
    },
    {
      href: '#prices',
      text: 'precios'
    },
  ]

</script>

<div
  class={`absolute flex flex-col w-full gap-10 p-10 pb-16 transition-all duration-200 top-[60px] md:top-0 border-t md:flex md:flex-row md:relative md:translate-y-0 md:translate-x-0 md:w-auto md:border-none md:p-0 bg-white ${navbarIsOpen ? 'translate-x-0 border-primary' : 'translate-x-full border-transparent'}`}
>
  <ul class="flex flex-col items-center text-3xl font-medium gap-x-2 gap-y-14 md:flex-row md:text-base">
    {#each links as link}
      <li class="capitalize">
        <NavLink href={link.href} text={link.text} />
      </li>
    {/each}
  </ul>
  <LinkButton
    href='#'
    variant='secondary'
  >
    quiero ir
  </LinkButton>
</div>