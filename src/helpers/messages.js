export const generateMessage = ({ name, phone, comments }) => {
  let message = `¡Hola Ara👋🏼, mi nombre es ${name} y estoy interesad@ en asistir a la excursión!🌴🔥.%0A%0A`;
  message += `Mi número de teléfono es📱: ${phone}.%0APor favor, contáctame para confirmar la reserva.✌🏼%0A%0A`;

  if (comments) {
    message += `También, me gustaría compartir un comentario🥴: ${comments}.%0A%0A`;
  }

  message += 'Espero tu respuesta y gracias de antemano.😊%0A%0A'
  message += `Click aqui para mandar mensaje:%0Ahttps://wa.me/52${phone}`


  return message
}