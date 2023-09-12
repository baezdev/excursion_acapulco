export const sendMessage = async (message) => {
  const BOT_KEY = import.meta.env.PUBLIC_BOT_KEY
  const CHAT_ID = import.meta.env.PUBLIC_CHAT_ID
  const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_KEY}/sendMessage?chat_id=${CHAT_ID}&text=${message}`

  try {
    const response = await fetch(TELEGRAM_URL)
    const result = await response.json()
    if (!result.ok) {
      throw new Error('Error al enviar el mensaje')
    }
    return 'Mensaje enviado con exito'

  } catch (error) {
    throw new Error('Error al enviar el mensaje')
  }
}