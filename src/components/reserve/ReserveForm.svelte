<script>
  import {
    calculatePercentage,
    calculateTotal,
    handleSumTotals,
    validateForm,
    generateMessage,
    showCongralutationsAlert,
    generateConfetti,
  } from "../../helpers";
  import { sendMessage } from "../../service/sendMessage";
  import LinkButton from "../ui/LinkButton.svelte";
  import Field from "./Field.svelte";
  import TermsCheckbox from "./TermsCheckbox.svelte";
  import ButtonDelete from "./ButtonDelete.svelte";

  let name = "";
  let phone = "";
  let rooms = [];
  let termsWereAccepted = false;
  let errors = {};
  let total = 0;

  const handleAddNewRoom = () => {
    if (rooms.length >= 3) return;

    rooms = [
      ...rooms,
      {
        id: rooms.length + 1,
        persons: "",
        childrens: "",
        total: 0,
      },
    ];
  };

  const handleDeleteRoom = (id) => {
    rooms = rooms.filter((room) => room.id !== id);
    total = calculatePercentage(handleSumTotals(rooms));
  };

  const handleReserve = (message) => {
    sendMessage(message);
    showCongralutationsAlert();
    generateConfetti();
  };

  const handleSubmit = () => {
    errors = validateForm({ name, phone, palcesAvailable: 45, rooms });

    if (Object.keys(errors).length > 0) {
      return;
    }

    const message = generateMessage({ name, phone, rooms, total });

    handleReserve(message);
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="flex-1 md:px-5">
  <p class="mb-8 text-2xl font-semibold">
    Llena los siguientes datos y nosotros te contactamos
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
      <div class="flex items-center justify-between">
        <span class="text-base md:text-xl font-bold">
          {rooms.length}
          {rooms.length !== 1
            ? "Habitaciones agregadas"
            : "Habitacion agregada"}
        </span>
        <LinkButton
          variant="secondary"
          type="button"
          on:click={handleAddNewRoom}
          size="small"
        >
          Agregar Habitación
        </LinkButton>
      </div>
      <div class="flex flex-col gap-10 md:gap-4 mt-5">
        {#each rooms as room}
          <div
            class="flex place-items-start gap-5 animate-fade animate-once animate-ease-in-out"
          >
            <div class="flex flex-col md:flex-row gap-5">
              <Field
                bind:fieldValue={room.persons}
                label="# de personas"
                name={`persons${room.id}`}
                placeholder="Maximo 4"
                type="number"
                error={errors[`person${room.id}`]}
                on:input={({ target }) => {
                  room.total = calculateTotal(target.value);
                  total = calculatePercentage(handleSumTotals(rooms));
                }}
              />
              <Field
                bind:fieldValue={room.childrens}
                label="# de niños"
                name={`childrens${room.id}`}
                placeholder="Habra niños?"
                type="number"
                error={errors[`children${room.id}`]}
                on:input={({ target }) => {
                  room.total = calculateTotal(room.persons, target.value);
                  total = calculatePercentage(handleSumTotals(rooms));
                }}
              />
            </div>
            <span class="flex-1 font-medium self-center"
              >Total: $<span class="text-xl font-semibold"
                >{calculateTotal(room.persons, room.childrens)}</span
              ></span
            >
            <ButtonDelete on:click={() => handleDeleteRoom(room.id)} />
          </div>
        {/each}
      </div>
    </div>
    {#if total > 0}
      <p class="text-2xl font-semibold my-2">
        El pago para reservar es de: $<span
          class="text-3xl font-bold text-primary">{total}</span
        >
      </p>
    {/if}
    <TermsCheckbox bind:checked={termsWereAccepted} />
    <div class="flex justify-end w-full mt-5">
      <LinkButton type="button" disabled={!termsWereAccepted} role="submit">
        Quiero Reservar
      </LinkButton>
    </div>
  </div>
</form>
