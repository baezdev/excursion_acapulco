<script>
  import { twMerge } from 'tailwind-merge'
  import { baseStyle } from '../styles/button';

  export let href
  export let variant = 'primary'

  const getVariantStyles = () => {
    return variant === 'primary'
      ? 'text-white before:bg-primary text-xl px-7 py-4 md:py-3'
      : 'text-primary before:bg-primary before:bg-opacity-20 md:text-base text-3xl'
  }

  const variantButton = getVariantStyles()
</script>
<a
  href={href}
  class={twMerge(baseStyle, variantButton)}>
  <slot />
</a>