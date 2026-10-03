/**
 * ==================================================
 * ACCOUNT & SOCIAL LINKS CONFIGURATION
 * ==================================================
 * Easily update your social links below.
 */
const links = {
    discord: "YOUR_DISCORD_LINK",
    facebook: "YOUR_FACEBOOK_LINK",
    instagram: "YOUR_INSTAGRAM_LINK",
    tiktok: "YOUR_TIKTOK_LINK"
};

/**
 * Opens a link securely in a new tab.
 * Validates if the link has been changed from the placeholder.
 */
const openLink = (url) => {
    // Check if link is still a placeholder
    if (url && !url.includes("YOUR_")) {
        window.open(url, '_blank', 'noopener,noreferrer');
    } else {
        alert("Link not set yet. Please update the URLs in js/script.js!");
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interactive Cards Setup (Whole card click)
    const cardMappings = {
        'card-discord': links.discord,
        'card-facebook': links.facebook,
        'card-instagram': links.instagram,
        'card-tiktok': links.tiktok
    };

    for (const [id, url] of Object.entries(cardMappings)) {
        const cardElement = document.getElementById(id);
        if (cardElement) {
            // Click support
            cardElement.addEventListener('click', () => openLink(url));
            // Keyboard accessibility support (Enter key)
            cardElement.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') openLink(url);
            });
        }
    }

    // 2. Buttons Setup (Prevents event bubbling to the card)
    const buttons = document.querySelectorAll('.social-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the outer card from also firing a click event
            
            const btnId = btn.id;
            if (btnId.includes('discord')) openLink(links.discord);
            else if (btnId.includes('facebook')) openLink(links.facebook);
            else if (btnId.includes('instagram')) openLink(links.instagram);
            else if (btnId.includes('tiktok')) openLink(links.tiktok);
        });
    });

    // 3. Footer Links Setup
    const footerMappings = {
        'link-discord': links.discord,
        'link-facebook': links.facebook,
        'link-instagram': links.instagram,
        'link-tiktok': links.tiktok
    };

    for (const [id, url] of Object.entries(footerMappings)) {
        const linkElement = document.getElementById(id);
        if (linkElement) {
            linkElement.addEventListener('click', (e) => {
                e.preventDefault(); // Prevents default anchor redirect jump
                openLink(url);
            });
        }
    }
});