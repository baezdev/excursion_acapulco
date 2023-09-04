<script>
  import { validateForm } from "../../helpers/validateForm";
  import LinkButton from "../ui/LinkButton.svelte";
  import Field from "./Field.svelte";
  import Swal from "sweetalert2";

  let name = "";
  let phone = "";
  let places = 0;
  let termsWereAccepted = false;
  let errors = {};

  const handleSubmit = () => {
    errors = validateForm({ name, phone, places, palcesAvailable: 45 });

    if (Object.keys(errors).length > 0) {
      return;
    }

    /* Swal.fire({
      icon: 'success',
      title: 'Listo',
      text: 'Ya sabemos que quieres ir a Acapulco, te contactaremos',
    }) */

    window.open(
      "https://api.whatsapp.com/send?phone=525631498641&text=Hola%Soy%Angel%y%quiero%ir%a%Acapulco",
      "_blank"
    );
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="flex-1 md:px-5">
  <p class="mb-8 text-2xl font-semibold">
    Llena los siguientes datos y nosotros te contactamos
  </p>
  <div class="flex flex-col gap-5">
    <Field
      bind:fieldValue={name}
      label="Nombre"
      name="name"
      placeholder="Ingrese su nombre"
      error={errors.name}
    />
    <Field
      bind:fieldValue={phone}
      label="Telefono"
      name="phone"
      placeholder="Ingrese su numero de telefono"
      type="number"
      error={errors.phone}
    />
    <div class="flex items-center justify-between gap-5">
      <Field
        bind:fieldValue={places}
        label="# de Lugares"
        name="places"
        placeholder="Cuantos lugares quieres reservar"
        type="number"
        error={errors.places}
      />
      <p class="text-xl font-bold">
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
      <LinkButton type="button" disabled={!termsWereAccepted}>
        Quiero Reservar</LinkButton
      >
    </div>
  </div>
</form>
