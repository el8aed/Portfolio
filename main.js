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
const html = document.documentElement;

// Apply saved theme on page load
if (localStorage.getItem("color") === "dark") {
  html.classList.add("dark");
  icon.classList.replace("fa-moon", "fa-sun");
  icon.style.color = "#fd7014";
}

// Toggle theme
darkToggle.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  icon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");
  icon.style.color = isDark ? "#fd7014" : "#1a1a1a";
  localStorage.setItem("color", isDark ? "dark" : "light");
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

