import swal from "sweetalert2";

export default class Notify {
  static toast = swal.mixin({
    toast: true,
    showConfirmButton: false,
    position: "top-right",
    timer: 3000
  });

  static swal = swal.mixin({
    title: "Ops..."
  });

  static errorToast(text) {
    return this.toast.fire({
      icon: "error",
      text
    });
  }

  static successToast(text) {
    return this.toast.fire({
      icon: "success",
      text
    });
  }

  static error(text, title = "") {
    return this.swal.fire({
      title: title || "Error!",
      icon: "error",
      text
    });
  }

  static confirm(text) {
    return this.swal.fire({
      title: "Você tem certeza?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      text
    });
  }

  static success(text, title = "") {
    return this.swal.fire({
      title: title || "Sucesso!",
      icon: "success",
      confirmButtonText: "OK",
      text
    });
  }

  static question(text, title = "") {
    return this.swal.fire({
      title: title || "Você tem certeza?",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
      text
    });
  }
}
