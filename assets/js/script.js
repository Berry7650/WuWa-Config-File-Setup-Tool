// =====================================================
// Player42 Toolkit Script
// Version: Final v2.4
// =====================================================

// ============================================================
// SECTION: GLITCH TITLE MANAGEMENT (index.html)
// ============================================================

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


// ============================================================
   // SECTION: DIALOG MANAGEMENT (Command Copy)
   // ============================================================
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


// ============================================================
   // SECTION: SOCIAL LINKS
   // ============================================================
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

// ============================================================
   // GALLERY ZOOM - wuwa-visuals.html
   // ============================================================

document.addEventListener('DOMContentLoaded', function() {

// Add images here
const galleryImages = [
  { src: 'assets/images/visual-showcase/wallhaven-o5kp77.png', title: 'Celestial Peaks', category: 'Landscape' },
  { src: 'assets/images/visual-showcase/wallhaven-5gx5z3.png', title: 'Neon Cityscape', category: 'Urban' },
  { src: 'assets/images/visual-showcase/wallhaven-2yrgvy.jpg', title: 'Serene Dawn', category: 'Nature' }
];

let zoomIndex = 0;
let scale = 1;
let panX = 0, panY = 0;
let isDragging = false;
let dragStartX = 0, dragStartY = 0;

const modal    = document.getElementById('zoom-modal');
const zoomImg  = document.getElementById('zoom-image');
const wrapper  = document.getElementById('zoom-wrapper');
const viewport = document.getElementById('zoom-viewport');

if (!modal || !zoomImg || !wrapper || !viewport) return;

function updateTransform() {
  wrapper.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
}

function setZoom(newScale) {
  scale = Math.max(0.5, Math.min(5, newScale));
  if (scale === 1) { panX = 0; panY = 0; }
  updateTransform();
}

window.openZoom = function(idx) {
  zoomIndex = idx;
  loadZoomImage();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function loadZoomImage() {
  scale = 1; panX = 0; panY = 0;
  modal.classList.add('loading');

  const item = galleryImages[zoomIndex];
  document.getElementById('zoom-title').textContent = item.title + ' — ' + item.category;
  document.getElementById('zoom-counter').textContent = `${zoomIndex + 1} / ${galleryImages.length}`;
  document.getElementById('btn-prev').disabled = zoomIndex === 0;
  document.getElementById('btn-next').disabled = zoomIndex === galleryImages.length - 1;

  zoomImg.src = item.src;
  updateTransform();

  zoomImg.onload = () => modal.classList.remove('loading');
  if (zoomImg.complete) modal.classList.remove('loading');
}

window.closeZoom = function() {
  modal.classList.remove('active', 'loading');
  document.body.style.overflow = '';
};

function changeImage(dir) {
  const next = zoomIndex + dir;
  if (next >= 0 && next < galleryImages.length) {
    zoomIndex = next;
    loadZoomImage();
  }
}

/* Button wiring */
document.getElementById('btn-zoomin').onclick  = () => setZoom(scale + 0.5);
document.getElementById('btn-zoomout').onclick = () => setZoom(scale - 0.5);
document.getElementById('btn-reset').onclick   = () => setZoom(1);
document.getElementById('btn-close').onclick   = closeZoom;
document.getElementById('btn-prev').onclick    = () => changeImage(-1);
document.getElementById('btn-next').onclick    = () => changeImage(1);

/* Click backdrop to close */
viewport.addEventListener('click', closeZoom);
wrapper.addEventListener('click', e => e.stopPropagation());

/* Keyboard */
document.addEventListener('keydown', e => {
  if (!modal.classList.contains('active')) return;
  if (e.key === 'Escape')      closeZoom();
  if (e.key === 'ArrowLeft')   changeImage(-1);
  if (e.key === 'ArrowRight')  changeImage(1);
  if (e.key === '+')           setZoom(scale + 0.5);
  if (e.key === '-')           setZoom(scale - 0.5);
});

/* Scroll to zoom */
viewport.addEventListener('wheel', e => {
  e.preventDefault();
  setZoom(scale + (e.deltaY < 0 ? 0.25 : -0.25));
}, { passive: false });

/* Drag to pan */
viewport.addEventListener('mousedown', e => {
  if (e.target === viewport) return;
  isDragging = true;
  dragStartX = e.clientX - panX;
  dragStartY = e.clientY - panY;
  viewport.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  panX = e.clientX - dragStartX;
  panY = e.clientY - dragStartY;
  updateTransform();
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  viewport.style.cursor = 'grab';
});

// Generate gallery HTML
const container = document.getElementById('gallery-container');
if (container) {
  container.innerHTML = galleryImages.map((img, i) => 
    '<div class="gallery-item" onclick="openZoom(' + i + ')">' +
      '<img src="' + img.src + '" alt="' + img.title + '" onerror="this.parentElement.style.display=\'none\'">' +
      '<div class="gallery-item-overlay"><h3>' + img.title + '</h3><span>View →</span></div>' +
    '</div>'
  ).join('');
  }
});

// ============================================================
   // SECTION: PAGE INIT
   // ============================================================
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  const uiCards = document.querySelectorAll('.ui-card');
  uiCards.forEach((card, index) => {
    card.style.setProperty('--i', index + 1);
  });
  
  if (titleElement) {
    updateGlitchTitle();
    setInterval(updateGlitchTitle, 8000);
  }
});

// ============================================================
// SECTION: SERVICE WORKER REGISTRATION
// ============================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('ServiceWorker registered'))
      .catch(err => console.log('ServiceWorker registration failed: ', err));
  });
}
