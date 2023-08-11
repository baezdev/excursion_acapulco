<script>
  export let hrs
  export let activity
  export let image
</script>

<li
  class="flex w-full md:w-96 justify-between pl-6 before:content-[''] before:bg-[url(/images/check.svg)] before:w-6 before:h-6 before:absolute relative before:bg-cover before:-left-[13px] before:-top-1 gap-2 md:gap-3"
>
  <div>
    <time class="text-lg text-gray-600 font-medium">{hrs}</time>
    <p class="text-xl md:text-2xl">{activity}</p>
  </div>
  <picture>
    <img
      src={image}
      alt={activity}
      class="w-20 md:w-24 aspect-square rounded-2xl"
      loading="lazy"
    />
  </picture>
</li>
