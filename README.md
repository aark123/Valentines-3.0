# 💌 Valentine's Website

A romantic 4-page Valentine's site — fully static, deploy-ready for GitHub Pages.

## Project Structure

```
valentine-site/
├── index.html      ← Page 1: "Will you be my valentine" + postcard
├── page2.html      ← Page 2: Animated heart + YES / NO buttons
├── page3.html      ← Page 3: "MY WIFE" + 3 photo frames
├── page4.html      ← Page 4: "PICK ONE NOW" + 3 photo frames
├── styles.css      ← Shared stylesheet (background, typography, components)
├── script.js       ← Falling petals animation
├── assets/         ← Drop your images and GIF here
│   └── (empty)
└── README.md
```

---

## 🖼 How to Replace Photos

1. Put your images in the `assets/` folder (e.g. `photo1.jpg`, `photo2.jpg`, etc.).
2. Open the relevant HTML file (`page3.html` or `page4.html`).
3. Inside each `.photo-frame`, you'll see a commented-out `<img>` tag and a placeholder `<div>`:
   ```html
   <!-- <img src="assets/photo1.jpg" alt="Photo 1"> -->
   <div class="photo-placeholder">...</div>
   ```
4. **Uncomment** the `<img>` line, update the `src` to your filename, and **delete** the placeholder `<div>`.

## 🎞 How to Add Your Own GIF

1. Save your GIF as `assets/valentine.gif`.
2. Open `page2.html`.
3. Find the GIF area and **uncomment** the `<img>` tag:
   ```html
   <img src="assets/valentine.gif" alt="Valentine animation" />
   ```
4. Delete or comment out the `<svg>` block below it.

---

## 🚀 How to Deploy on GitHub Pages

1. **Create a GitHub repository** (e.g. `my-valentine`).
2. **Push all files** to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Valentine's site 💌"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/my-valentine.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repo.
4. Under **Source**, select **Deploy from a branch**.
5. Choose `main` branch and `/ (root)` folder → **Save**.
6. Wait ~1 minute. Your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/my-valentine/
   ```

That's it! Send the link to your valentine 💕
