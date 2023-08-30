<script>
  import LinkButton from "../ui/LinkButton.svelte";
  import Field from "./Field.svelte";

  let name = "";
  let phone = "";
  let places
  let termsWereAccepted = false;

  const handleSubmit = (e) => {
    if (!termsWereAccepted) {
      console.log("Acepta hdp");
      return;
    }

    console.log('fino')
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="flex-1 px-5">
  <p class="text-2xl font-semibold mb-8">Llena los siguientes datos y nosotros te contactamos</p>
  <div class="flex flex-col gap-5">
    <Field
      bind:fieldValue={name}
      label="Nombre"
      name="name"
      placeholder="Ingrese su nombre"
    />
    <Field
      bind:fieldValue={phone}
      label="Telefono"
      name="phone"
      placeholder="Ingrese su numero de telefono"
      type="number"
    />
    <div class="flex items-center justify-between gap-5">
      <Field
        bind:fieldValue={places}
        label="# de Lugares"
        name="places"
        placeholder="Cuantos lugares quieres reservar"
        type="number"
      />
      <p class="font-bold text-xl">
        ¡<span class="text-2xl text-primary">45</span> lugares disponibles!
      </p>
    </div>
    <label class="flex items-center">
      <input
        type="checkbox"
        class="w-5 h-5 text-white transition duration-200 ease-in-out border-2 border-gray-400 rounded-full appearance-none accent-primary checked:bg-primary border-opacity-30"
        bind:checked={termsWereAccepted}
      />
      <span class="ml-2 text-font">Acepto los términos y condiciones</span>
    </label>
    <div class="flex justify-end w-full mt-5">
      <LinkButton
        type="button"
        disabled={!termsWereAccepted}
      >
        Quiero Reservar</LinkButton
      >
    </div>
  </div>
</form>
