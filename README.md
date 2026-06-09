# Personal Website Portfolio

This repository hosts a one-page portfolio website for Tavon Gordon. The site is built with HTML, CSS, Bootstrap, and JavaScript and includes a profile section, project highlights, and a contact form.

## Repository Contents
- `index.html` – Main portfolio landing page.
- `css/styles.css` – Custom styles, typography, and responsive layout.
- `js/script.js` – Contact form validation and EmailJS submission logic.
- `journal.md` – Development notes and project documentation.
- `resume/` – Resume-related assets and supporting files.

## View Locally
1. Open `index.html` directly in your browser.
2. Or serve the site with a simple local server from the repository root.
   - Example: `python -m http.server 8000`
   - Then open `http://localhost:8000`

## Deploy with GitHub Pages
1. Push this repository to GitHub.
2. In GitHub, open `Settings` → `Pages`.
3. Choose the `main` branch and save.
4. The site publishes at `https://tavon2596.github.io/`.

## Key Features
- Single-page portfolio structure with anchor navigation.
- About section with a professional summary.
- Projects section featuring sample work and links.
- Contact section with live client-side validation.
- EmailJS-ready contact form wiring in `js/script.js`.
- Bootstrap 5 via CDN for responsive layout and utilities.

## EmailJS Integration
The contact form code includes placeholder values for EmailJS:
- `YOUR_PUBLIC_KEY`
- `YOUR_SERVICE_ID`
- `YOUR_TEMPLATE_ID`

Replace these values with your EmailJS account settings before sending email from the frontend. Also configure Allowed Origins in the EmailJS dashboard to restrict use to your GitHub Pages domain.

## Notes
- The website is intended as a clean, portfolio-style landing page.
- The contact form fields are mapped by `name` attributes for EmailJS compatibility.
- The project uses minimal external dependencies to keep the site lightweight.
