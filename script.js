document.addEventListener("DOMContentLoaded", () => {
  // ================================
  // MOBILE MENU
  // ================================

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      menuToggle.classList.toggle("active");

      const isOpen = mainNav.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu after clicking a navigation link
    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ================================
  // CURRENT YEAR
  // ================================

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // ================================
  // ENQUIRY FORM → WHATSAPP
  // ================================

  const enquiryForm = document.getElementById("enquiryForm");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(enquiryForm);

      const getValue = (name) => {
        const value = formData.get(name);
        return value ? value.toString().trim() : "";
      };

      const product = getValue("product");
      const size = getValue("size");
      const set = getValue("set");
      const quantity = getValue("quantity");
      const colour = getValue("colour");
      const customerName = getValue("name");
      const businessName = getValue("business");
      const phone = getValue("phone");
      const city = getValue("city");
      const state = getValue("state");
      const address = getValue("address");
      const customRequirement = getValue("custom");

      const message = `
Hello ASGAR Manufacturer Bags,

I would like to make a product enquiry.

*PRODUCT DETAILS*
Product: ${product || "Not specified"}
Size: ${size || "Not specified"}
Set: ${set || "Not specified"}
Quantity: ${quantity || "Not specified"}
Colour: ${colour || "Not specified"}

*CUSTOMER DETAILS*
Name: ${customerName || "Not specified"}
Business Name: ${businessName || "Not specified"}
Phone / WhatsApp: ${phone || "Not specified"}
City: ${city || "Not specified"}
State: ${state || "Not specified"}

Address / PIN:
${address || "Not specified"}

*CUSTOM REQUIREMENT*
${customRequirement || "No special requirement mentioned."}

Please share the available options, pricing and further details.

Thank you.
ASGAR Manufacturer Bags
Ludhiana, Punjab
`.trim();

      const whatsappNumber = "919653181917";
      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
  }

  // ================================
  // SMOOTH SCROLL
  // ================================

  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // ================================
  // HEADER SCROLL EFFECT
  // ================================

  const header = document.querySelector(".site-header");

  if (header) {
    const updateHeader = () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", updateHeader, {
      passive: true
    });

    updateHeader();
  }

  // ================================
  // IMAGE LAZY LOADING
  // ================================

  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
  });

  // Keep the main hero image loading immediately
  const heroImage = document.querySelector(".hero img");

  if (heroImage) {
    heroImage.setAttribute("loading", "eager");
  }

  // ================================
  // ESCAPE KEY
  // ================================

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (mainNav) {
        mainNav.classList.remove("active");
      }

      if (menuToggle) {
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});
