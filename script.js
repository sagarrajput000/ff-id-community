
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

// Mobile navigation
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Current year in footer
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const uidForm = document.querySelector("#uid-checker-form");
const uidInput = document.querySelector("#player-uid");
const uidResult = document.querySelector("#uid-result");
const uidAppealView = document.querySelector("#uid-appeal-view");
const uidBackButton = document.querySelector("#uid-back-button");
const uidReviewValue = document.querySelector("#uid-review-value");

if (uidForm instanceof HTMLFormElement &&
    uidInput instanceof HTMLInputElement &&
    uidResult instanceof HTMLElement &&
    uidAppealView instanceof HTMLElement &&
    uidBackButton instanceof HTMLButtonElement &&
    uidReviewValue instanceof HTMLOutputElement) {
  uidForm.addEventListener("submit", (event) => {
    event.preventDefault();
    uidReviewValue.textContent = uidInput.value;
    uidForm.hidden = true;
    uidAppealView.hidden = false;
    uidBackButton.focus();
  });

  uidInput.addEventListener("input", () => {
    uidResult.textContent = "";
  });

  uidBackButton.addEventListener("click", () => {
    uidAppealView.hidden = true;
    uidForm.hidden = false;
    uidInput.focus();
  });
}

// Close the mobile menu when Escape is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav && menuButton) {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
