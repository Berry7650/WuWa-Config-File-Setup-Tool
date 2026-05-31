╔══════════════════════════════════════════════╗
║        P42 TOOLKIT — IMAGES FOLDER           ║
║       youtube.com/@Player42_g               ║
╚══════════════════════════════════════════════╝

HOW TO ADD YOUR OWN VISUALS:
────────────────────────────────────────────────
1. Drop your image files into THIS folder (images/)
   Supported formats: .jpg  .jpeg  .png  .webp  .gif

2. Open  wuwa-visuals.html  in a text editor

3. Add a card entry inside the image-grid div:

   <div class="image-card" onclick="openZoom('images/yourfile.jpg','Your Title')">
     <div class="image-card-title">YOUR TITLE</div>
     <img src="images/yourfile.jpg" alt="Your Title" loading="lazy"/>
   </div>

4. Save and refresh — your image appears in the gallery.

NAMING TIPS:
• Keep names short, lowercase, no spaces
  Good:  wuwa_battle_scene.jpg
  Bad:   My Cool Screenshot (1).PNG
• Use JPG for photos, PNG for screenshots with UI
• Recommended size: 1280×720 or 1920×1080

────────────────────────────────────────────────
P42 Toolkit · youtube.com/@Player42_g
