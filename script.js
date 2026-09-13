/* =========================================================
   ASGAR MANUFACTURER BAGS
   Main JavaScript File
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       1. DYNAMIC CURRENT YEAR FOR FOOTER
       ========================================================= */
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    /* =========================================================
       2. MOBILE MENU TOGGLE
       ========================================================= */
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation menu
            mainNav.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Close the mobile menu automatically when a link is clicked
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* =========================================================
       3. WHATSAPP ENQUIRY FORM HANDLER
       ========================================================= */
    const enquiryForm = document.getElementById('enquiryForm');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            // Prevent the form from submitting the traditional way (page reload)
            e.preventDefault();

            // Collect all data from the form
            const formData = new FormData(enquiryForm);
            
            const name = formData.get('name') || '';
            const business = formData.get('business') || '';
            const phone = formData.get('phone') || '';
            const product = formData.get('product') || 'Not Specified';
            const size = formData.get('size') || 'Not Specified';
            const set = formData.get('set') || 'Not Specified';
            const quantity = formData.get('quantity') || '';
            const colour = formData.get('colour') || 'Not Specified';
            const city = formData.get('city') || '';
            const state = formData.get('state') || '';
            const address = formData.get('address') || '';
            const message = formData.get('message') || '';

            // Construct the WhatsApp message nicely formatted
            let whatsappText = `*New Website Enquiry - ASGAR Manufacturer Bags* 🎒\n\n`;
            
            whatsappText += `*Name:* ${name}\n`;
            if (business) whatsappText += `*Business:* ${business}\n`;
            whatsappText += `*Phone:* ${phone}\n\n`;
            
            whatsappText += `*--- Order Requirements ---*\n`;
            whatsappText += `*Product:* ${product}\n`;
            whatsappText += `*Quantity:* ${quantity} Pieces\n`;
            
            if (size !== 'Not Specified') whatsappText += `*Size:* ${size}\n`;
            if (set !== 'Not Specified') whatsappText += `*Set:* ${set}\n`;
            if (colour !== 'Not Specified') whatsappText += `*Colour:* ${colour}\n\n`;
            
            whatsappText += `*--- Location ---*\n`;
            whatsappText += `*City:* ${city}, ${state}\n`;
            if (address) whatsappText += `*Delivery Address:* ${address}\n\n`;
            
            if (message) {
                whatsappText += `*--- Custom Message ---*\n${message}`;
            }

            // Encode the text for the URL
            const encodedText = encodeURIComponent(whatsappText);
            
            // Your WhatsApp Number (Country code 91 + number)
            const whatsappNumber = '919653181917';
            
            // Create the final WhatsApp API URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
            
            // Open WhatsApp in a new tab/window
            window.open(whatsappUrl, '_blank');
            
            // Optional: Reset the form after submission
            // enquiryForm.reset();
        });
    }

});

