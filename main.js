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
const body = document.body;
const animate = document.querySelector(".highlight");

let typingInterval = null;
let timeoutIds = [];

const typing = () => {
  if (!animate) return;

  // احفظ التايمر علشان نقدر نلغيه
  timeoutIds.push(setTimeout(() => animate.innerHTML = "Mohamed", 0));
  timeoutIds.push(setTimeout(() => animate.innerHTML = "Frontend", 4000));
  timeoutIds.push(setTimeout(() => animate.innerHTML = "Web Developer", 8000));
};

function startTyping() {
  if (typingInterval !== null) return;
  typing();
  typingInterval = setInterval(typing, 12000);
}

function stopTyping() {
  // وقف الـ setInterval
  if (typingInterval !== null) {
    clearInterval(typingInterval);
    typingInterval = null;
  }

  // امسح كل التايمرات اللي جوا typing
  timeoutIds.forEach(id => clearTimeout(id));
  timeoutIds = [];

  // رجّع النص الأساسي
  if (animate) animate.innerHTML = "Mohamed";
}

// ابدأ على الوضع المحايد
body.classList.remove("dark");
animate.classList.remove("dark");

// شغّل الوضع حسب الـ localStorage
const savedTheme = localStorage.getItem("color");
if (savedTheme === "dark") {
  body.classList.add("dark");
  animate.classList.add("dark");
  icon.classList.replace("fa-moon", "fa-sun");
  icon.style.color = "#fd7014";
  startTyping();
} else {
  icon.classList.replace("fa-sun", "fa-moon");
  icon.style.color = "#1a1a1a";
  stopTyping();
}

// عند الضغط على زر تغيير الثيم
darkToggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  animate.classList.toggle("dark");

  icon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");
  icon.style.color = isDark ? "#fd7014" : "#1a1a1a";
  localStorage.setItem("color", isDark ? "dark" : "light");

  if (isDark) {
    startTyping();
  } else {
    stopTyping();
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

