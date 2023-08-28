<script>
  import LinkButton from "../ui/LinkButton.svelte";
  import Field from "./Field.svelte";

  let name = "";
  let phone = "";
  let termsWereAccepted = false;

  const handleSubmit = (e) => {
    if (!termsWereAccepted) {
      console.log("Acepta hdp");
      return;
    }

    console.log({ name, phone, termsWereAccepted });
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="flex-1 px-5">
  <p>Llena los siguientes datos y nosotros te contactamos</p>
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
