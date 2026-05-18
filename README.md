# Fabien Petit - Personal Website

Static personal website for Fabien Petit (Economist, UCL CEPEO), hosted from this repository.

## Live Site

- Production entry file: [index.html](index.html)
- Custom domain config: [CNAME](CNAME)
- Main stylesheet: [assets/css/v2.css](assets/css/v2.css)
- Main script: [assets/js/v2.js](assets/js/v2.js)

## Repository Structure

- [index.html](index.html): homepage and main content
- [assets/css](assets/css): production CSS
- [assets/js](assets/js): production JS
- [assets/webfonts](assets/webfonts): local icon fonts required by Font Awesome
- [images](images): profile image and favicon assets
- [wp](wp): linked PDF working papers and related documents
- [PETIT_CV.pdf](PETIT_CV.pdf): CV download target

## Editing Guide

### Content updates

- Edit profile, updates, and publication content in [index.html](index.html).
- Keep publication links in sync with files in [wp](wp) where local PDFs are used.

### Styling updates

- Edit visual system and layout in [assets/css/v2.css](assets/css/v2.css).
- Keep icon CSS dependency [assets/css/fontawesome-all.min.css](assets/css/fontawesome-all.min.css) and [assets/webfonts](assets/webfonts) intact.

### Interaction updates

- Edit abstract toggles and anchor behavior in [assets/js/v2.js](assets/js/v2.js).

## Local Preview

You can preview locally with a simple static server from the repository root.

### Option 1 (Python)

```bash
python -m http.server 8000
```

Then open:

- `http://localhost:8000/`

### Option 2 (VS Code Live Server)

- Open [index.html](index.html) and launch with Live Server.

## Deployment

This is a static site repository.

- Push changes to the deployment branch used by your hosting setup.
- Ensure [CNAME](CNAME) remains set to the live domain.
- If favicon changes do not appear immediately, clear browser cache / hard refresh.

## Pre-Publish Checklist

Before publishing:

1. Confirm [index.html](index.html) exists and opens correctly.
2. Confirm required assets exist:
   - [assets/css/fontawesome-all.min.css](assets/css/fontawesome-all.min.css)
   - [assets/css/v2.css](assets/css/v2.css)
   - [assets/js/v2.js](assets/js/v2.js)
   - [images/fabienpetit-pp.jpg](images/fabienpetit-pp.jpg)
   - [images/favicon-v2.svg](images/favicon-v2.svg)
3. Confirm referenced local files in [index.html](index.html) resolve (CV + local PDFs in [wp](wp)).
4. Confirm metadata tags are present (canonical, Open Graph, Twitter, JSON-LD).
5. Run diagnostics for [index.html](index.html), [assets/css/v2.css](assets/css/v2.css), and [assets/js/v2.js](assets/js/v2.js).

## Notes

- The repository has been cleaned to remove old alternatives and legacy template files.
- Some documents in [wp](wp) and content under [workshop](workshop) are retained intentionally for conservative cleanup.

## License and Attribution

- Legacy template attribution and licensing details are in [LICENSE.txt](LICENSE.txt).
- Site content remains authored for this website repository.
