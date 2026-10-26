// Nomor pemilik 089665831166 dalam format internasional.
const WHATSAPP_NUMBER = "6289665831166";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp], [data-package]").forEach((link) => {
  const selectedPackage = link.dataset.package;
  const message = selectedPackage
    ? `Halo NusaWeb! Saya tertarik dengan paket ${selectedPackage}. Boleh konsultasi tentang kebutuhan website saya?`
    : "Halo NusaWeb! Saya ingin konsultasi gratis tentang landing page atau menu digital untuk usaha saya. Bisa dibantu?";
  link.href = whatsappLink(message);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu() {
  navigation.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Buka menu");
  toggle.textContent = "☰";
}
toggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  toggle.textContent = isOpen ? "✕" : "☰";
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    closeMenu();
    toggle.focus();
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();
