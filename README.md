# Pocket Tanpura 🪕

Pocket Tanpura is a lightweight, responsive, and fully synthesized digital Tanpura built for web browsers. Designed with musicians in mind, it provides a highly customizable harmonic drone using the Web Audio API, entirely client-side with zero external dependencies.

It features a strict non-scrolling interface that feels native on iOS, Android, iPads, and desktops, and fully supports installation as a Progressive Web App (PWA).

## ✨ Features

* **Customizable Pitch & Tuning:** Choose your base pitch (Sa) from A0 to C2, mapping to standard Safed/Kali (Kattai) scales.
* **String Configuration:** Easily configure the First String (Pa, Ma, Ni) and Middle Strings (Sa, Re, Ga, Ma, Ni) to suit your specific Raga.
* **Octave Control:** Shift the overall drone from Kharaj (Deep Bass) up to Taar (High Soprano).
* **Real-time Visualizer:** A dynamic 4-string visualizer that responds precisely to the pluck speed and rhythm.
* **Advanced Audio Controls:**
    * **Pluck Speed (BPM):** Fine-tune the speed from 30 to 130 BPM.
    * **Pluck Style:** Choose between Authentic, Continuous, or Urgent rhythm patterns.
    * **Tone Profiles:** Select between Rich, Mellow, or Deep synthesis profiles.
    * **Master Tuning:** Micro-adjust the master frequency between 432 Hz and 448 Hz (Defaults to 440 Hz).
* **Dynamic Theming:** Seamlessly toggle between Auto (System), Light ☀️, and Dark 🌙 modes.
* **Persistent Settings:** Your preferences are automatically saved to `localStorage` and restored on your next session.
* **PWA Ready:** Install it directly to your home screen for offline use and a native app feel.

## 🚀 Live Demo

https://mindfulfarmer.github.io/pocket-tanpura/

## 🛠️ Technologies Used

* **HTML5 / CSS3:** Utilizing CSS variables for theming and `100dvh` for strict, non-scrolling mobile viewports.
* **Vanilla JavaScript:** No frameworks, keeping the app fast and lightweight.
* **Web Audio API:** Real-time additive synthesis and audio filtering (Biquad filters, Stereo Panning, Envelope shaping) to create organic, acoustic-sounding drones.

## 📦 Installation & Usage

Since Pocket Tanpura is a client-side web application, no build steps or servers are required.

1.  Clone the repository:
    ```bash
    git clone [https://github.com/yourusername/pocket-tanpura.git](https://github.com/yourusername/pocket-tanpura.git)
    ```
2.  Navigate to the directory:
    ```bash
    cd pocket-tanpura
    ```
3.  Serve the files using any local web server. For example, using Python:
    ```bash
    python -m http.server 8000
    ```
4.  Open `http://localhost:8000` in your browser.

### PWA Installation
To use this as an app on your smartphone:
1. Host the files on a secure (HTTPS) server like GitHub Pages.
2. Open the URL in Safari (iOS) or Chrome (Android).
3. Select "Share" -> "Add to Home Screen" (iOS) or "Install App" (Android).

## 👨‍💻 Author

**Designed and developed by Bhaskarjyoti Das.**
Made in India 🇮🇳
