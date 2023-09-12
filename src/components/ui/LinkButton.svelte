<script>
  import { twMerge } from "tailwind-merge";
  import { baseStyle } from "../../styles/button";

  export let href = "";
  export let variant = "primary";
  export let type = "link";
  export let disabled = false;
  export let role = "button";
  export let size = "normal";

  const getVariantStyles = () => {
    return variant === "primary"
      ? "text-white before:bg-primary text-xl px-7 py-4 md:py-3 mx-0"
      : `text-primary before:bg-primary before:bg-opacity-20  mx-0 ${
          size === "small" ? "text-base px-2" : "md:text-base text-3xl"
        }`;
  };

  const variantButton = getVariantStyles();
</script>

{#if type === "link"}
  <a
    {href}
    class={twMerge(
      size === "small" && "text-base mx-0",
      baseStyle,
      variantButton
    )}
  >
    <slot />
  </a>
{:else}
  <button
    class={twMerge(
      baseStyle,
      variantButton,
      disabled === true &&
        "hover:before:scale-100 cursor-not-allowed border-primary text-primary before:bg-white"
    )}
    {href}
    {disabled}
    type={role}
    on:click
  >
    <slot />
  </button>
{/if}
