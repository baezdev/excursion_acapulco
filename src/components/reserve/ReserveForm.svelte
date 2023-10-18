<script>
  import {
    validateForm,
    generateMessage,
    showCongralutationsAlert,
    generateConfetti,
  } from "../../helpers";
  import { sendMessage } from "../../service/sendMessage";
  import LinkButton from "../ui/LinkButton.svelte";
  import Field from "./Field.svelte";
  import TermsCheckbox from "./TermsCheckbox.svelte";

  let name = "";
  let phone = "";
  let comments = "";
  let termsWereAccepted = false;
  let errors = {};

  const handleReserve = (message) => {
    sendMessage(message);
    generateConfetti();
    showCongralutationsAlert();
  };

  const handleSubmit = () => {
    errors = validateForm({ name, phone, palcesAvailable: 45 });

    if (Object.keys(errors).length > 0) {
      return;
    }

    const message = generateMessage({ name, phone, comments });

    handleReserve(message);
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="flex-1 md:px-5">
  <p class="mb-8 text-2xl font-semibold">
    Llena los siguientes datos y nosotros le contactamos.
  </p>
  <div class="flex flex-col gap-5">
    <div class="flex items-start justify-between gap-5">
      <Field
        bind:fieldValue={name}
        label="Nombre Completo"
        name="name"
        placeholder="Ingrese su nombre completo"
        error={errors.name}
      />
      <Field
        bind:fieldValue={phone}
        label="Teléfono"
        name="phone"
        placeholder="Ingrese su numero de teléfono"
        type="number"
        error={errors.phone}
      />
    </div>
    <div>
      <Field
        bind:fieldValue={comments}
        label="Comentarios"
        name="comments"
        placeholder="Si quiere, puede dejarnos un comentario, un mensaje, una idea... Aunque no es obligatorio 🥴"
        type="area"
        error={errors.comments}
      />
    </div>
    <TermsCheckbox bind:checked={termsWereAccepted} />
    <div class="flex justify-end w-full mt-5">
      <LinkButton type="button" disabled={!termsWereAccepted} role="submit">
        Quiero Reservar
      </LinkButton>
    </div>
  </div>
</form>
