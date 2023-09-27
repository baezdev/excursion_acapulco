import Swal from "sweetalert2";
export const showCongralutationsAlert = async () => {
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
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "/";
    }
  })
}