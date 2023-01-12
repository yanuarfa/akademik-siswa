const profileButton = document.getElementById("user-menu-button");
const userMenuProfile = document.getElementById("user-menu-list");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenuList = document.getElementById("mobile-menu");
const btnMasuk = document.getElementById("btn-masuk");
const modalLogin = document.querySelector(".modal-login");
const btnCloseModal = document.querySelector(".btn-close-modal");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    if (mobileMenuList.classList.contains("hidden")) {
      mobileMenuList.classList.remove("hidden");
    } else {
      mobileMenuList.classList.add("hidden");
    }
  });
}

if (profileButton) {
  profileButton.addEventListener("click", () => {
    if (userMenuProfile.classList.contains("hidden")) {
      userMenuProfile.classList.remove("hidden");
    } else {
      userMenuProfile.classList.add("hidden");
    }
  });
}

if (btnMasuk) {
  btnMasuk.addEventListener("click", () => {
    if (modalLogin.classList.contains("hidden")) {
      modalLogin.classList.remove("hidden");
    } else {
      modalLogin.classList.add("hidden");
    }
  });

  btnCloseModal.addEventListener("click", () => {
    modalLogin.classList.add("hidden");
  });
}
