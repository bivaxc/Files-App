# Files PWA: phone-first document manager

This is a cross-platform installable web app for iPhone and Android. It is designed to be developed and tested from a phone browser. It has no application backend, login, subscription, or paid API.

## Features in this version
- Installable PWA shell and local document library using IndexedDB.
- Import multiple documents into local browser storage.
- Scan via phone camera file capture, or choose existing images.
- Create multi-page A4 PDFs from images, with grayscale, black-and-white, warm, brightness, contrast and rotation controls.
- PDF viewer with page navigation.
- PDF rotate, split selected pages, merge with other imported PDFs, and re-save/optimize (lossless re-save; not guaranteed to reduce size).
- DOCX text extraction/preview.
- DOCX-to-PDF conversion (layout may differ from Word).
- PDF-to-DOCX conversion by extracting selectable text and creating a reflowed Word document.
- Download/share/export and delete files.
- Search and recent files.
- PWA service worker caches app resources as they are loaded.

## Important limits
- The camera capture flow is not a professional scanner with automatic paper-edge detection and perspective correction. It lets the user capture a page and provides enhancement filters.
- PDF-to-DOCX does not reproduce the original page layout and does not OCR scanned-image PDFs.
- DOCX-to-PDF renders the document as an image-based PDF and may not preserve complex pagination or selectable text.
- Compression currently re-saves the PDF. It may not shrink the file significantly.
- Offline operation is best after the app has first loaded while online. First-time dependency loading may require connectivity.
- Browser storage can be cleared by iOS/Android settings. Export important files to Files/iCloud Drive/Google Drive as a backup.
- A web app cannot fully match all native filesystem and camera features. Use native app development later if necessary.

## Phone-only workflow (recommended)
The easiest route is a browser IDE that supports Vite/Node projects, such as StackBlitz or another online editor. You do not need Node installed locally for this workflow. Upload/import the project files, run `npm install` and `npm run dev` in its terminal, then preview the site. Check the editor's current free-plan and upload limits before choosing it.

If you use a Node.js terminal app on iPhone:
1. Extract the ZIP into a folder accessible to that app.
2. Run `npm install`.
3. Run `npm run dev -- --host 0.0.0.0`.
4. Open the local address printed by the terminal in Safari, if that app exposes the server to Safari. iOS terminal apps differ, and some cannot host a server accessible to Safari.

## Build
With Node.js 20.19+ or 22.12+:
```bash
npm install
npm run build
npm run dev -- --host 0.0.0.0
```
The production output is `dist/`. Deploy that folder to a static host if you want to install it as a PWA through HTTPS. A free static hosting tier may be available but provider terms can change. No backend is required.

## Install on iPhone
1. Open the deployed HTTPS site in Safari.
2. Tap Share.
3. Choose Add to Home Screen.
4. Open Files from the home screen.

## Install on Android
1. Open the deployed HTTPS site in Chrome.
2. Open the browser menu.
3. Choose Install app or Add to Home screen.

## Files storage
The app stores imported file Blobs in IndexedDB. Files remain on that browser profile and device. Export copies for durable backup. Clearing browser/site data may delete the local library.

## No false promises
This source is a functional MVP implementation but has not been tested on your specific iPhone or on Android devices in this environment. Validate camera permissions, PDF generation, file sizes and offline reload before using it for important documents.


## Optional free static deployment using GitHub Pages

The repository includes `.github/workflows/deploy.yml`. Once all source files are in a GitHub repository on the `main` branch:
1. Open the repository in GitHub.
2. Go to Settings → Pages.
3. Under Build and deployment, choose **GitHub Actions** as the source.
4. Push/commit the source files to `main` or run the workflow from Actions.
5. Wait for the workflow to finish. The deployed site URL appears in the workflow run and Pages settings.

GitHub Pages static hosting and GitHub Actions have usage limits and terms that can change. This app does not need a paid backend, but GitHub account availability and limits apply. A public repository is usually the simplest free path for open-source code.
