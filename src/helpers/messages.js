import { countPersons, handleSumTotals } from "./operations";

export const generateMessage = ({ name, phone, rooms, total }) => {
  let message = `Nombre 🙅🏽‍♂️: ${name}%0ATelefono 📱: ${phone}%0AHabitaciones 🛌🏽: ${rooms.length
    }%0APersonas 👨🏼‍👩🏼: ${countPersons(rooms).persons}%0ANiños 👧🏽: ${countPersons(rooms).childrens
    }%0ATotal 💰: $${handleSumTotals(
      rooms
    )}%0APago para reservar 💵: $${total}`;

  return message
}