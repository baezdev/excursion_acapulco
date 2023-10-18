import { NAME_REGEX, PHONE_REGEX } from '../constants/regex'

export const validateForm = ({ name, phone, palcesAvailable }) => {
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
    errors.phone = "El número de teléfono es requerido"
  }

  else if (!PHONE_REGEX.test(phone)) {
    errors.phone = "Deben ser 10 digitos"
  }

  return errors
}