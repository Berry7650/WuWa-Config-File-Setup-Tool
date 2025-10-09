// =====================================================
// Player42 Toolkit Script
// Version: Final v2.1 (Complete Merge)
// =====================================================

// --- GLITCH TITLE MANAGEMENT (For index.html) ---
const titles = [
    { text: "Wuthering Waves Config File Setup Toolkit", style: "style-1" },
    { text: "Resonator Settings Optimization Interface", style: "style-2" },
    { text: "Wuwa Performance Tweak Utility Portal", style: "style-3" },
    { text: "Kuro Game Engine Parameter Adjuster", style: "style-1" }
];
let currentTitleIndex = 0;
const titleElement = document.getElementById('main-title');

/**
 * Cycles the main title text, style, and applies a brief glitch effect.
 */
function updateGlitchTitle() {
    if (!titleElement) return;

    titleElement.classList.add('glitch-effect');
    
    setTimeout(() => {
        // Reset previous styles
        titleElement.classList.remove('style-1', 'style-2', 'style-3');
        
        const nextTitle = titles[currentTitleIndex];
        
        // Apply new text and style
        titleElement.textContent = nextTitle.text;
        titleElement.classList.add(nextTitle.style);
        
        // Remove Glitch Effect
        setTimeout(() => {
            titleElement.classList.remove('glitch-effect');
        }, 300);
        
        // Move to the next title
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;

    }, 100); 
}

// --- DIALOG MANAGEMENT (Command Copy) ---
const dialogScrim = document.getElementById('dialog-scrim');
const dialogContainer = document.getElementById('dialog-container');

/**
 * Show the "Command Copied" dialog
 */
function showDialog() {
  if (!dialogScrim || !dialogContainer) return;
  dialogScrim.classList.add('visible');
  dialogContainer.classList.add('visible');
}

/**
 * Close the dialog
 */
function closeDialog() {
  if (!dialogScrim || !dialogContainer) return;
  dialogScrim.classList.remove('visible');
  dialogContainer.classList.remove('visible');
}

// --- COPY TO CLIPBOARD FUNCTION ---
/**
 * Copies text from an element to clipboard.
 * Shows dialog on success.
 */
function copyToClipboard(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return console.warn(`Element #${elementId} not found.`);
  const textToCopy = el.innerText.trim();

  navigator.clipboard.writeText(textToCopy)
    .then(() => showDialog())
    .catch(err => console.error('Failed to copy text:', err));
}

// --- SOCIAL LINKS ---
/**
 * Opens social links in a new tab based on platform.
 */
function goToSocialLink(platform) {
  const links = {
    discord: 'https://discord.gg/VV4w5AdJFh',
    telegram: 'https://t.me/Yt_Player42',
    youtube: 'https://www.youtube.com/@Player42_g'
  };
  if (links[platform]) {
    window.open(links[platform], '_blank');
  } else {
    console.warn(`No link configured for platform: ${platform}`);
  }
}

// --- IMAGE ZOOM MODAL (For wuwa-visuals.html) ---
const zoomModal = document.getElementById('zoom-modal');
const zoomImage = document.getElementById('zoom-image');

/**
 * Opens the full-screen zoom modal and loads the image.
 */
function openZoom(src, title) {
    if (!zoomModal || !zoomImage) return;

    zoomImage.src = src;
    document.getElementById('zoom-title').textContent = title;
    
    zoomModal.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

/**
 * Closes the full-screen zoom modal.
 */
function closeZoom() {
    if (!zoomModal) return;
    zoomModal.classList.remove('visible');
    document.body.style.overflow = 'auto';
    zoomImage.src = ''; 
}

// --- PAGE INIT ---
/**
 * Auto-initializes icons and animations.
 */
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  // Trigger fade-in for UI cards
  const uiCards = document.querySelectorAll('.ui-card');
  uiCards.forEach((card, index) => {
    card.style.setProperty('--i', index + 1);
  });
  
  // START GLITCH TITLE LOOP only on index.html
  if (titleElement) {
    // Run immediately on load
    updateGlitchTitle(); 
    // Then run every 5 seconds (5000ms)
    setInterval(updateGlitchTitle, 5000);
  }
});