import Swal from "sweetalert2";


export function _confirmation(message: string |null|undefined){
  Swal.fire({
    position: "center",
    icon: "success",
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
    } ,
    text:message ?  String(message) : "",
    title: "Opération effectué avec succès !",
    showConfirmButton: false,
    timer: 1700
  });


}

export function _error(message :string |null|undefined){
  Swal.fire({
    position: "center",
    icon: "error",
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
    },
    text:message ?  String(message) : "",
    title: " Oops..!",
    showConfirmButton: false,
    timer: 1700
  });






}

export function _warning(message :string |null|undefined){
  Swal.fire({
    position: "center",
    icon: "warning",
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
    } ,
    title: "Oops..!",
    text: message ?  String(message) : "" ,
    showConfirmButton: false,
    timer: 1700
  });






}



export async function _deletion(message: string | null | undefined): Promise<boolean> {
  const result = await Swal.fire({
    title: "SUPPRESSION",
    icon:"warning" ,
    showClass: {
      popup: `animate__animated animate__fadeInUp animate__faster`
    },
    hideClass: {
      popup: `animate__animated animate__fadeOutDown animate__faster`
    },
    showCancelButton: true,
    confirmButtonText: "Annuler",
    cancelButtonText: "Supprimer",
    reverseButtons: true ,
    confirmButtonColor : "#4a9f1e",
    cancelButtonColor : "#9f1e29",
    text: message ?  String(message) : ""
  });


  return !result.isConfirmed.valueOf();
}



