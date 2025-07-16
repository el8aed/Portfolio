// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  offset: 100,
  once: false,
});

// Header scroll effect
const darkToggle = document.querySelector(".dark-mode");
const icon = darkToggle.querySelector("i");
const html = document.documentElement;

// Apply saved theme on page load
const savedTheme = localStorage.getItem("color");

if (savedTheme === "dark") {
  html.classList.add("dark");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
  icon.style.color = "#fd7014";
} else {
  html.classList.remove("dark");
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
  icon.style.color = "#1a1a1a";
}

// Toggle theme
darkToggle.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");

  if (isDark) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    icon.style.color = "#fd7014";
    localStorage.setItem("color", "dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    icon.style.color = "#1a1a1a";
    localStorage.setItem("color", "light");
  }
});

//import Emailjs
import emailjs from "https://cdn.jsdelivr.net/npm/@emailjs/browser@4.1.0/+esm";

emailjs.init("IxTvCs3lBPrkfs0c2"); // ← public key بتاعك

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const result = await emailjs.sendForm(
      "service_c2it3u6", // ← Service ID
      "template_c8mlyv5", // ← Template ID
      form
    );
    alert("✅ تم إرسال الرسالة بنجاح");
    form.reset();
  } catch (error) {
    console.error("❌ فشل الإرسال:", error);
    alert("❌ فشل إرسال الرسالة. راجع الكونسول.");
  }
});

// const element = document.querySelector(".highlight");

// const typing = () => {
//   setTimeout(() => {
//     element.innerHTML = "Mohamed";
//   }, 0);
//   setTimeout(() => {
//     element.innerHTML = "Frontend";
//   }, 4000);
//   setTimeout(() => {
//     element.innerHTML = "Web Developer";
//   }, 8000);
// };
// window.onload = () => {
//   // لو الوضع داكن، شغل الأنميشن
//   if (document.documentElement.classList.contains("dark")) {
//     typing();
//     setInterval(typing, 12000);
//   } else {
//     // لو الوضع لايت، خليه ثابت على "Mohamed"
//     element.innerHTML = "Mohamed";
//   }
// };
