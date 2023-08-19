<script>
  import Separator from "../Separator.svelte";
  import Container from "../Container.svelte";
  import {
    name,
    location,
    description,
    services,
    servicesInTheRoom,
    characteristics,
  } from "../../data/hotel.json";
</script>

<Separator />
<section class="py-16 text-font" id="hotel">
  <Container>
    <h2 class="mb-10 text-3xl font-bold text-font md:text-6xl">Hotel {name}</h2>
    <article
      class="flex flex-col items-center justify-between gap-10 mt-12 md:mt-16 md:flex-row"
    >
      <div class="flex flex-col items-center gap-5 md:w-1/2 grow">
        <div
          class="grid md:grid-cols-[repeat(3,150px)] grid-cols-[repeat(3,100px)] md:justify-center justify-evenly md:gap-10 w-full"
        >
          {#each characteristics as { description, icon }}
            <div class="flex flex-col items-center gap-3 p-1 md:p-3 rounded-xl">
              <img
                src={`/icons/${icon}.svg`}
                alt={`icono que hace referencia de ${description}`}
              />
              <span class="text-sm font-medium md:text-xl">{description}</span>
            </div>
          {/each}
        </div>
        <p class="text-lg text-center">{@html description}</p>
      </div>
      <picture class="block grow">
        <img src="/images/hotel2.webp" alt="" class="w-full rounded-2xl" />
      </picture>
    </article>
    <article
      class="flex flex-col-reverse items-center justify-between gap-10 mt-12 md:mt-20 md:flex-row"
    >
      <picture class="block md:w-1/2 grow">
        <img src="/images/hotel3.webp" alt="" class="w-full rounded-2xl" />
      </picture>
      <div
        class="flex flex-col justify-between w-full md:flex-row md:w-1/2 grow"
      >
        <ul class="block mb-5 md:mb-0">
          <li class="mb-3 text-xl font-semibold md:text-lg text-primary">
            Servicios generales
          </li>
          {#each services as service}
            <li
              class="leading-6 before:content-[''] before:bg-[url(/images/done.svg)] before:w-6 before:h-6 before:bg-cover before:-left-0 before:items-center flex items-center gap-1 w-full text-lg md:text-base"
            >
              {service}
            </li>
          {/each}
        </ul>
        <ul>
          <li class="mb-3 text-xl font-semibold md:text-lg text-primary">
            Servicios de habitación
          </li>
          {#each servicesInTheRoom as service}
            <li
              class="leading-6 before:content-[''] before:bg-[url(/images/done.svg)] before:w-6 before:h-6 before:bg-cover before:-left-0 before:items-center flex items-center gap-1 text-lg md:text-base"
            >
              {service}
            </li>
          {/each}
        </ul>
      </div>
    </article>
    <article class="w-full mt-12 md:mt-20 rounded-2xl h-60 md:h-96">
      <p class="mb-8 text-lg text-center md:w-[70ch] mx-auto">
        {@html location}
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.399097706451!2d-99.86751138919975!3d16.8561408178248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca582edab2e721%3A0xfecf0c7d01eae255!2sLas%20Torres%20Gemelas%20Acapulco!5e0!3m2!1ses-419!2smx!4v1692473626210!5m2!1ses-419!2smx"
        width="100%"
        height="100%"
        style="border:0; border-radius: 16px;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Ubicacion del hotel torres gemelas"
      />
    </article>
  </Container>
</section>
