/* =========================================================
   ASGAR MANUFACTURER BAGS
   Main Website JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );
    });

    /* Close menu after clicking a navigation link */
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      });
    });

    /* Close menu with Escape */
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      }
    });
  }


  /* =======================================================
     CURRENT YEAR
     ======================================================= */

  const yearElements = document.querySelectorAll("[data-year]");

  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });


  /* =======================================================
     ENQUIRY FORM → WHATSAPP
     ======================================================= */

  const enquiryForm = document.querySelector(".enquiry-form");

  if (enquiryForm) {

    enquiryForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const getValue = (name) => {
        const field = enquiryForm.querySelector(`[name="${name}"]`);
        return field ? field.value.trim() : "";
      };

      const name = getValue("name");
      const phone = getValue("phone");
      const business = getValue("business");
      const quantity = getValue("quantity");
      const product = getValue("product");
      const message = getValue("message");

      /* Basic validation */
      if (!name || !phone || !quantity || !product) {
        alert("Please fill in all required fields.");
        return;
      }

      const whatsappMessage =
`Hello ASGAR Manufacturer Bags,

I want to make a wholesale enquiry.

Name: ${name}
Phone: ${phone}
Business: ${business || "Not provided"}
Product: ${product}
Quantity: ${quantity}
Requirement: ${message || "Not provided"}

Please share the available designs, pricing and order details.

Thank you.`;

      const whatsappNumber = "919653181917";

      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
  }


  /* =======================================================
     SMOOTH INTERNAL SCROLLING
     ======================================================= */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetID = link.getAttribute("href");

      if (!targetID || targetID === "#") {
        return;
      }

      const target = document.querySelector(targetID);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

  });


  /* =======================================================
     HEADER SCROLL EFFECT
     ======================================================= */

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


  /* =======================================================
     LAZY LOAD IMAGES
     ======================================================= */

  const images = document.querySelectorAll("img");

  images.forEach((image, index) => {

    /* Keep first hero image eager */
    if (index === 0) {
      image.loading = "eager";
      image.fetchPriority = "high";
    } else {
      image.loading = "lazy";
    }

    image.decoding = "async";
  });


  /* =======================================================
     PREVENT EMPTY FORM SUBMISSION
     ======================================================= */

  const formInputs = document.querySelectorAll(
    ".enquiry-form input, .enquiry-form select, .enquiry-form textarea"
  );

  formInputs.forEach((field) => {

    field.addEventListener("input", () => {
      field.removeAttribute("aria-invalid");
    });

  });


  /* =======================================================
     CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP
     ======================================================= */

  window.addEventListener("resize", () => {

    if (window.innerWidth > 800 && mainNav && menuToggle) {

      mainNav.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open menu"
      );
    }

  });


  /* =======================================================
     CONSOLE MESSAGE
     ======================================================= */

  console.log(
    "ASGAR Manufacturer Bags website loaded successfully."
  );

});
