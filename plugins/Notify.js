import swal from "sweetalert2";

export default class Notify {
  static colorTheme() {
    const theme = window.$nuxt.$vuetify.theme;
    //@ts-ignore
    const colors = theme.isDark ? theme.defaults.dark : theme.defaults.light;
    //@ts-ignore
    const colorTheme = theme.isDark ? "theme--dark" : "theme--light";
    return {
      customClass: {
        container: colorTheme,
        confirmButton: "v-btn success ripple",
        cancelButton: "v-btn error"
      },
      // buttonsStyling: false,
      confirmButtonColor: colors.success,
      cancelButtonColor: colors.error
    };
  }

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
      ...this.colorTheme(),
      icon: "error",
      text
    });
  }

  static successToast(text) {
    return this.toast.fire({
      ...this.colorTheme(),
      icon: "success",
      text
    });
  }

  static error(text, title = "") {
    return this.swal.fire({
      ...this.colorTheme(),
      title: title || "Error!",
      icon: "error",
      text
    });
  }

  static confirm(text) {
    return this.swal.fire({
      ...this.colorTheme(),
      title: "Você tem certeza?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      text
    });
  }

  static success(text, title = "") {
    return this.swal.fire({
      ...this.colorTheme(),
      title: title || "Sucesso!",
      icon: "success",
      confirmButtonText: "OK",
      text
    });
  }

  static question(text, title = "") {
    return this.swal.fire({
      ...this.colorTheme(),
      title: title || "Você tem certeza?",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
      text
    });
  }
}
