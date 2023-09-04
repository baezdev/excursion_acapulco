import { NAME_REGEX, PHONE_REGEX } from '../constants/regex'

export const validateForm = ({ name, phone, places, palcesAvailable }) => {
  const errors = {}

  //name validation
  if (name === "") {
    errors.name = "El nombre es requerido"
  }
  else if (name.length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres"
  }
  else if (!NAME_REGEX.test(name)) {
    errors.name = "El nombre debe contener solo letras"
  }

  //phone validation
  if (phone === "") {
    errors.phone = "El numero de telefono es requerido"
  }

  else if (!PHONE_REGEX.test(phone)) {
    errors.phone = "Deben ser 10 digitos"
  }

  //places validation
  if (places === 0) {
    errors.places = "El numero de lugares debe ser mayor a 0"
  }

  else if (places > palcesAvailable) {
    errors.places = `Lo siento solo hay ${palcesAvailable} lugares disponibles`
  }

  return errors
}