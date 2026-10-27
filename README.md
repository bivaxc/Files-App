# Files PWA

A phone-first, installable document manager for iPhone and Android. It is hosted as a static site on GitHub Pages and keeps documents in the current browser on the current device.

## Latest requested changes
- Home page's top-right search icon is replaced with an account-holder icon. It opens Settings.
- Settings includes Google-only account sign-in and sign-out controls.
- New users create their Files account through Google automatically; existing Google users sign in with the same button.
- When signed in, the app shows the Google display name, email and profile picture when available.
- The floating blue plus button is not part of the Home interface.
- Me includes Account and devices, Trash and Settings.

## Important: enable Google sign-in once
The Google account interface is in the source, but authentication is not active until you add your Firebase web app configuration. Google authentication needs a Firebase project owned/configured by the app owner.

1. Open https://console.firebase.google.com/ and create a project. The free Spark plan is sufficient for this authentication setup.
2. Open Authentication → Get started → Sign-in method and enable Google.
3. Open Project settings → General → Your apps and register a Web app if one does not exist.
4. Copy the web app's apiKey, authDomain, projectId, and appId.
5. In this repository, open src/firebase.js and replace the four PASTE_..._HERE strings with the matching values.
6. In Firebase Authentication settings, add bivaxc.github.io to Authorized domains if it is not already listed.
7. Commit the change to main and wait for GitHub Actions to deploy.

Firebase web configuration identifies the project; it is not a server secret. Do not put service-account private keys in this client app.

## Features
- Local document library stored with IndexedDB.
- Import documents from the phone's file picker.
- Capture pages with the phone camera or select existing images.
- Convert multiple images into a multi-page A4 PDF, with brightness, contrast, rotation and image filters.
- Full continuous PDF viewing.
- PDF rotate, split, merge and re-save/optimize (re-saving is not guaranteed to reduce file size).
- DOCX text extraction and preview.
- DOCX-to-PDF conversion (complex layouts may differ).
- PDF-to-DOCX conversion by extracting selectable text and reflowing it into Word.
- Export, download and share documents using supported phone/browser features.
- Recent documents, rename, Trash and restore.
- Account and devices, Trash, Settings.
- Installable PWA shell and service-worker caching.

## Storage and account behavior
Google sign-in authenticates the person. It does not sync documents across devices. Document files are stored locally in IndexedDB on the device/browser that imported them. Clearing Safari website data or removing site data may remove locally stored documents, so export important files for backup.

## Known limitations
- This is a web app, not a native app, so some iOS file-system and camera features depend on Safari support.
- Camera scanning does not yet provide automatic document-edge detection and perspective correction.
- PDF-to-DOCX does not reproduce exact page layouts and does not OCR image-only scanned PDFs.
- DOCX-to-PDF may change pagination and may render content as images.
- The PDF compression/re-save function may not significantly reduce file size.
- Some dependencies may need to load online on first use before offline behavior is complete.

## Source and build
The full editable source is in this repository:
- src/main.jsx: application interface and document features.
- src/style.css: interface styling.
- src/firebase.js: Google sign-in configuration.
- index.html: app entry page.
- public/manifest.webmanifest: installable PWA metadata.
- public/sw.js: service-worker cache.
- vite.config.js: Vite configuration.
- .github/workflows/deploy.yml: GitHub Pages deployment.

Build with Node.js 20.19+ or 22.12+:

    npm install
    npm run build
    npm run dev -- --host 0.0.0.0

## Deploy and install
GitHub Actions builds and deploys the app from the main branch. Open repository Settings → Pages and set the source to GitHub Actions.

- Live app: https://bivaxc.github.io/Files-App/
- Repository: https://github.com/bivaxc/Files-App
- Workflow runs: https://github.com/bivaxc/Files-App/actions
- Download current source ZIP: https://github.com/bivaxc/Files-App/archive/refs/heads/main.zip

On iPhone, open the live app in Safari → Share → Add to Home Screen. On Android, open in Chrome and choose Install app/Add to Home screen.