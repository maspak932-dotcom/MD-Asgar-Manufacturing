/* =====================================================
ASGAR LUXURY BAGS
Main JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

/* ================= CURRENT YEAR ================= */

const yearElement = document.querySelector(".footer-bottom span");

if (yearElement) {
yearElement.textContent =
"© ${new Date().getFullYear()} ASGAR LUXURY BAGS";
}

/* ================= SMOOTH NAVIGATION ================= */

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((link) => {

link.addEventListener("click", (event) => {

  const targetId = link.getAttribute("href");

  if (!targetId || targetId === "#") {
    return;
  }

  const target = document.querySelector(targetId);

  if (!target) {
    return;
  }

  event.preventDefault();

  const header = document.querySelector(".header");
  const headerHeight = header
    ? header.offsetHeight
    : 0;

  const targetPosition =
    target.getBoundingClientRect().top +
    window.scrollY -
    headerHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });

});

});

/* ================= EXTERNAL SOCIAL LINKS ================= */

const socialLinks = {
Instagram:
"https://www.instagram.com/funny_joke6114?igsh=MWRvcnloZGdvOWNlcg==",

Facebook:
  "https://www.facebook.com/share/18pgTtHLd8/",

X:
  "https://x.com/md_asgar_786",

Threads:
  "https://www.threads.com/@asgarluxurybags",

YouTube:
  "https://www.youtube.com/@TheSilent-01",

Website:
  "https://asgar-luxury-bags.vercel.app/"

};

/* ================= SOCIAL LINK CHECK ================= */

document.querySelectorAll(".social-links a").forEach((link) => {

const name = link.textContent.trim();

if (socialLinks[name]) {
  link.href = socialLinks[name];
  link.target = "_blank";
  link.rel = "noopener noreferrer";
}

});

/* ================= EXTERNAL LINKS SECURITY ================= */

document
.querySelectorAll('a[target="_blank"]')
.forEach((link) => {

  link.rel = "noopener noreferrer";

});

/* ================= WHATSAPP ================= */

const whatsappNumber = "919653181917";

const whatsappMessage =
"Hello, I am interested in your trolley bag products.";

const whatsappURL =
"https://wa.me/${whatsappNumber}?text=${encodeURIComponent( whatsappMessage )}";

document
.querySelectorAll(".whatsapp")
.forEach((button) => {

  button.href = whatsappURL;
  button.target = "_blank";
  button.rel = "noopener noreferrer";

});

/* ================= CONTACT PHONE ================= */

document
.querySelectorAll('a[href^="tel:"]')
.forEach((link) => {

  link.href = "tel:+919653181917";

});

/* ================= CONTACT EMAIL ================= */

document
.querySelectorAll('a[href^="mailto:"]')
.forEach((link) => {

  link.href = "mailto:aspak0131@gmail.com";

});

/* ================= PRODUCT ENQUIRY ================= */

const productButtons =
document.querySelectorAll(".product-btn");

productButtons.forEach((button) => {

button.addEventListener("click", () => {

  const productCard =
    button.closest(".product-card");

  if (!productCard) {
    return;
  }

  const productName =
    productCard.querySelector("h3");

  if (!productName) {
    return;
  }

  const product =
    productName.textContent.trim();

  const message =
    `Hello, I am interested in your ${product}.`;

  button.href =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

  button.target = "_blank";
  button.rel = "noopener noreferrer";

});

});

/* ================= WHOLESALE ENQUIRY ================= */

const wholesaleButton =
document.querySelector(".wholesale-left .btn-primary");

if (wholesaleButton) {

const message =
  "Hello, I want a wholesale quote.";

wholesaleButton.href =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

wholesaleButton.target = "_blank";
wholesaleButton.rel = "noopener noreferrer";

}

/* ================= GET QUOTE BUTTON ================= */

const quoteButton =
document.querySelector(".quote-btn");

if (quoteButton) {

const message =
  "Hello, I am interested in your trolley bag products.";

quoteButton.href =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

quoteButton.target = "_blank";
quoteButton.rel = "noopener noreferrer";

}

/* ================= HERO WHATSAPP BUTTON ================= */

const heroWhatsApp =
document.querySelector(".hero .btn-primary");

if (heroWhatsApp) {

const message =
  "Hello, I am interested in your trolley bag products.";

heroWhatsApp.href =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

heroWhatsApp.target = "_blank";
heroWhatsApp.rel = "noopener noreferrer";

}

/* ================= CONSOLE MESSAGE ================= */

console.log(
"ASGAR LUXURY BAGS website loaded successfully."
);

});
