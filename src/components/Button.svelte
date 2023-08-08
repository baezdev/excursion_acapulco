<script>
  import { twMerge } from "tailwind-merge"
  import { BUTTON_VARIANTS } from "../constants/button";

  export let variant

  const baseStyle = "relative z-10 px-3 md:py-[5px] py-3 md:text-base text-3xl font-semibold rounded-md capitalize transition-all duration-200 w-fit mx-auto before:content-[''] before:w-full before:h-full before:block before:absolute before:top-0 before:rounded-md before:-z-10 before:left-0 hover:before:scale-110 before:transition-all before:duration-200"

</script>
<button
  class={twMerge(baseStyle, variant === BUTTON_VARIANTS.primary && 'text-white before:bg-primary text md:text-xl text-3xl px-7 py-4 md:py-3', variant === BUTTON_VARIANTS.secondary && 'text-primary before:bg-primary before:bg-opacity-20 md:text-base text-3xl')}
>
  <slot/>
</button>