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

// Check saved theme or system preference
const savedTheme = localStorage.getItem("color");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  html.classList.add("dark");
  icon.classList.replace("fa-moon", "fa-sun");
  icon.style.color = "#fd7014";
} else {
  html.classList.remove("dark");
  icon.classList.replace("fa-sun", "fa-moon");
  icon.style.color = "#1a1a1a";
}

// Toggle dark mode
darkToggle.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");

  if (isDark) {
    icon.classList.replace("fa-moon", "fa-sun");
    icon.style.color = "#fd7014";
    localStorage.setItem("color", "dark");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
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
const element = document.querySelector(".highlight");
window.addEventListener("load", () => {
  if (document.documentElement.classList.contains("dark")){
const typeWriter = () => {
setTimeout(() => {
element.innerHTML = "Mohamed";
},0);
setTimeout(() => {
element.innerHTML = "Frontend";
},4000);
setTimeout(() => {
element.innerHTML = "Web Developer";
},8000);
};
typeWriter();
setInterval(typeWriter, 12000);
}else if (document.documentElement.classList.contains("highlight")){
element.innerHTML = "Mohamed";

}
});

