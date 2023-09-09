<script>
  import {
    calculatePercentage,
    calculateTotal,
    handleSumTotals,
  } from "../../helpers/operations";
  import { validateForm } from "../../helpers/validateForm";
  import LinkButton from "../ui/LinkButton.svelte";
  import Field from "./Field.svelte";
  import TermsCheckbox from "./TermsCheckbox.svelte";

  let name = "";
  let phone = "";
  let rooms = [];
  let termsWereAccepted = false;
  let errors = {};
  let total = 0;

  const handleAddNewRoom = () => {
    //TODO evitar que se agreguen mas de 3 habitaciones
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

  const handleSubmit = () => {
    errors = validateForm({ name, phone, palcesAvailable: 45, rooms });

    if (Object.keys(errors).length > 0) {
      return;
    }
    console.log('listo')
    /* window.open(
      "https://api.whatsapp.com/send?phone=525631498641&text=Hola%Soy%Angel%y%quiero%ir%a%Acapulco",
      "_blank"
    ); */
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
    </div>
    <div>
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold">
          {rooms.length}
          {rooms.length !== 1
            ? "Habitaciones agregadas"
            : "Habitacion agregada"}
        </span>
        <LinkButton
          variant="secondary"
          type="button"
          on:click={handleAddNewRoom}
        >
          Agregar habitacion
        </LinkButton>
      </div>
      <div class="flex flex-col gap-3 mt-5">
        {#each rooms as room}
          <div
            class="flex place-items-start gap-5 animate-fade animate-once animate-ease-in-out"
          >
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
            <span class="flex-1 font-medium self-center"
              >Total: <span class="text-xl font-semibold"
                >{calculateTotal(room.persons, room.childrens)}</span
              ></span
            >
            <button
              type="button"
              class="w-8"
              on:click={handleDeleteRoom(room.id)}
            >
              <img
                src="/icons/delete.svg"
                alt="icono de eliminar"
                class="w-full"
              />
            </button>
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
