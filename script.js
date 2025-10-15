// =====================================================
// Player42 Toolkit Script
// Version: Final v2.4 (Music Player & UI Updates)
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
 * ENHANCED: Added a brief flicker-out phase for smoother, more impactful transition.
 */
function updateGlitchTitle() {
    if (!titleElement) return;

    // 1. Prepare the next title and update index
    const nextTitle = titles[currentTitleIndex];
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;

    // --- ENHANCEMENT: TRIGGER FLICKER OUT ---
    // This class is used by CSS to make the text flash white/garbage characters.
    titleElement.classList.add('glitch-flicker-out');
    titleElement.classList.remove('glitch-effect'); // Ensure old glitch is off

    // 2. Delay the text/style update to align with the flicker out (50ms)
    setTimeout(() => {
        // Remove old classes and the flicker class
        titleElement.classList.remove('style-1', 'style-2', 'style-3', 'glitch-flicker-out');
        
        // Apply the new text content and style
        titleElement.textContent = nextTitle.text;
        
        // CRUCIAL: Set data-text with the NEW text for the CSS pseudo-elements
        titleElement.setAttribute('data-text', nextTitle.text); 
        titleElement.classList.add(nextTitle.style);

        // 3. Trigger the main glitch effect
        // The CSS animations run for 0.4s
        setTimeout(() => {
            titleElement.classList.add('glitch-effect');
        }, 10); 

        // 4. Remove the glitch effect after 450ms (just after the CSS animation completes)
        setTimeout(() => {
            titleElement.classList.remove('glitch-effect');
        }, 450); 
    }, 50); // Flicker-out duration
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

// FIX: Create a single, callable function for the HTML buttons to use
function copyCommand(id) {
    copyToClipboard(id);
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


// --- NEW: MUSIC PLAYER CONTROLS ---
const bgMusic = document.getElementById('background-music');
const musicToggleBtn = document.getElementById('music-toggle');

/**
 * Toggles background music playback and updates the icon.
 */
function toggleMusic() {
    if (!bgMusic || !musicToggleBtn) return;
    const isPlaying = !bgMusic.paused;

    if (isPlaying) {
        bgMusic.pause();
        musicToggleBtn.innerHTML = '<i data-lucide="volume-x"></i>';
    } else {
        // Use a promise to handle potential browser autoplay errors
        bgMusic.play().catch(error => console.error("Audio playback failed:", error));
        musicToggleBtn.innerHTML = '<i data-lucide="volume-2"></i>';
    }
    // Re-initialize Lucide icons to render the new one
    if (window.lucide) {
        lucide.createIcons();
    }
}

/**
 * Tries to play music on the first user interaction to bypass browser autoplay policies.
 * This listener removes itself after the first interaction.
 */
function playMusicOnFirstInteraction() {
    if (bgMusic && bgMusic.paused) {
        bgMusic.play().catch(e => {
            // This can fail if the user navigates away quickly, which is fine.
        });
    }
    // Remove the event listener so it only runs once
    document.removeEventListener('click', playMusicOnFirstInteraction);
    document.removeEventListener('keydown', playMusicOnFirstInteraction);
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
    // Initial call to start the process
    updateGlitchTitle(); 
    // Then run every 8 seconds (8000ms) for a cleaner loop
    setInterval(updateGlitchTitle, 8000);
  }

  // --- NEW: Initialize Music Player ---
  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', toggleMusic);
  }
  // Add listeners for the first user interaction to start music
  document.addEventListener('click', playMusicOnFirstInteraction);
  document.addEventListener('keydown', playMusicOnFirstInteraction);

});