// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  offset: 100,
  once: false,
});

// Header scroll effect
const header = document.querySelector("header");
const links = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    links.forEach((link) => {
      link.classList.add("scrolled");
    });
  } else {
    header.classList.remove("scrolled");
    links.forEach((link) => {
      link.classList.remove("scrolled");
    });
  }
});

const darkToggle = document.querySelector(".dark-mode");
const icon = darkToggle.querySelector("i");
const home = document.querySelector(".hero");
// Load saved mode on page load
const savedMode = localStorage.getItem("color");
if (savedMode === "dark") {
  header.classList.add("dark");
  home.classList.add("dark");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
  icon.style.color = "#cea637ff";
}

// Toggle dark mode
darkToggle.addEventListener("click", () => {
  if (icon.classList.contains("fa-moon")) {
header.classList.add("dark");
    home.classList.add("dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    icon.style.color = "#cea637ff";
    localStorage.setItem("color", "dark");
  } else {
    header.classList.remove("dark");
    home.classList.remove("dark");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    icon.style.color = "#1a1a1a";
    localStorage.setItem("color", "light");
  }
});
//import Emailjs
import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4.1.0/+esm';

emailjs.init("IxTvCs3lBPrkfs0c2"); // ← public key بتاعك

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const result = await emailjs.sendForm(
      "service_c2it3u6",       // ← Service ID
      "template_c8mlyv5",      // ← Template ID
      form
    );
    alert("✅ تم إرسال الرسالة بنجاح");
    form.reset();
  } catch (error) {
    console.error("❌ فشل الإرسال:", error);
    alert("❌ فشل إرسال الرسالة. راجع الكونسول.");
  }
});

