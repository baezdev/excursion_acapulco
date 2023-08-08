<script>
  export let href = ''
  export let text = ''
</script>
<a
  href={href}
  class="relative z-10 px-3 md:py-[5px] py-3 font-medium rounded-md capitalize transition-all duration-200 w-fit mx-auto before:content-[''] before:w-full before:h-full before:bg-transparent before:scale-75 hover:before:bg-secondary before:block before:absolute before:top-0 before:rounded-md hover:before:bg-opacity-75 before:-z-10 before:left-0 hover:before:scale-110 before:transition-all before:duration-300"
>
  {text}
</a>