# Madhu Portfolio — Updated Edition

A responsive React + Vite portfolio with a warm ivory background, deep ink text, violet accents, an optional dark theme, longer project descriptions, live Vercel links for the Movie Description App and News App, and a Certificates section containing the seven files you provided.

## Run in VS Code
1. Extract this ZIP into a folder.
2. Open that extracted folder in VS Code (**File → Open Folder**).
3. Select **Terminal → New Terminal**.
4. Run these commands separately:
   ```bash
   npm install
   npm run dev
   ```
5. Open the localhost URL shown by Vite, normally `http://localhost:5173`.

If you previously ran the project and npm gives a dependency/lockfile error, close the dev server and run in PowerShell:
```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install
npm run dev
```

## Included updates
- Reworked the color palette to ivory, ink, and violet with a dark-mode toggle.
- Added a Certificates section with links to all seven uploaded certificate files in `public/certificates/`.
- Added live links to the Movie Description App and News App deployments.
- Expanded the About and project descriptions.
- Removed the Sign Language to Text project from this version.
- Kept the mental-health chatbot as a project overview without inventing a live deployment link.

## Personalise before publishing
Open `src/main.jsx` and replace:
- `your.email@example.com` with your real email.
- The generic GitHub and LinkedIn profile URLs with your own profiles.
- The portrait placeholder with your own photo if you want to use a personal image.
- Add your resume PDF as `public/Madhu-Resume.pdf`.

Review every project description and skill to make sure it accurately reflects your work. The portfolio uses remote Unsplash project photos and Google Fonts, so those need an internet connection. Certificate files are stored locally in the project and will be included when deployed.

## Publish on Vercel
Push the folder to GitHub and import the repository into Vercel. Use build command `npm run build` and output directory `dist`.
