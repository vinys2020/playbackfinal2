document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const footer = document.querySelector("footer");

    function handleInputFocus() {
      if (isMobileDevice()) {
        footer.classList.add("hide-footer");
      }
    }

    function handleInputBlur() {
      if (isMobileDevice()) {
        footer.classList.remove("hide-footer");
      }
    }

    function isMobileDevice() {
      return window.innerWidth <= 768;
    }

    usernameInput.addEventListener("focus", handleInputFocus);
    passwordInput.addEventListener("focus", handleInputFocus);
    usernameInput.addEventListener("blur", handleInputBlur);
    passwordInput.addEventListener("blur", handleInputBlur);
  });