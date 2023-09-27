import Swal from "sweetalert2";
export const showCongralutationsAlert = () => {
  /* Swal.fire(
    "Felicidades! 👏🏼",
    "Diste el primer paso para tener unas excelentes vacaciones 🌴👙",
    "success",
    
  ) */
  Swal.fire({
    title: "Felicidades! 👏🏼",
    text: "Diste el primer paso para tener unas excelentes vacaciones 🌴👙",
    icon: "success",
    confirmButtonText: "Ok ⭐",
    confirmButtonColor: "#00B9AE"
  })
}