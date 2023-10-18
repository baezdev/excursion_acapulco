<script>
  export let checked;
</script>

<label class="flex items-center cursor-pointer w-fit">
  <input
    type="checkbox"
    class="w-5 h-5 text-white transition duration-200 ease-in-out border-2 border-gray-400 rounded-full appearance-none accent-primary checked:bg-primary border-opacity-30 cursor-pointer"
    bind:checked
  />
  <span class="ml-2 text-font">Acepto los términos y condiciones</span>
</label>
