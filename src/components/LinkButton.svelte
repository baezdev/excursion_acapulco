<script>
  import { twMerge } from 'tailwind-merge'

  export let href
  export let variant = 'primary'

  const baseStyle = "relative z-10 px-3 md:py-[5px] py-3 md:text-base text-3xl font-semibold rounded-md capitalize transition-all duration-200 w-fit mx-auto before:content-[''] before:w-full before:h-full before:block before:absolute before:top-0 before:rounded-md before:-z-10 before:left-0 hover:before:scale-110 before:transition-all before:duration-200"

  const getVariantStyles = () => {
    return variant === 'primary'
      ? 'text-white before:bg-primary text text-xl px-7 py-4 md:py-3'
      : 'text-primary before:bg-primary before:bg-opacity-20 md:text-base text-3xl'
  }

  const variantButton = getVariantStyles()
</script>
<a
  href={href}
  class={twMerge(baseStyle, variantButton)}>
  <slot />
</a>