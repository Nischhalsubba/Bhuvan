# Repository Instructions

## Setup

Bhuvan is documented as a static HTML, CSS, and JavaScript website. Identify the actual entry HTML file before changing behavior.

```bash
python -m http.server 8000
```

## Change rules

- Preserve relative asset paths and filename casing.
- Keep content, layout, and interaction changes small and reviewable.
- Replace placeholder copy and imagery with approved material.
- Do not add a framework merely to edit a static page.
- Keep contact actions explicit and functional.
- Store reusable colors, spacing, and typography in CSS variables where practical.

## Accessibility

- Use semantic landmarks and heading order.
- Keep navigation and controls keyboard accessible.
- Preserve visible focus.
- Add useful alt text.
- Verify contrast and mobile reflow.
- Respect reduced-motion preferences.

## Verification

1. Serve the repository locally.
2. Open every HTML page.
3. Check console and network errors.
4. Test navigation, gallery, and contact links.
5. Review common desktop and mobile widths.
6. Validate metadata and social preview before deployment.

## Do not

- Do not claim a deployment or client result without evidence.
- Do not publish unlicensed imagery.
- Do not present `docs/assets/bhuvan-thumbnail.svg` as a browser screenshot.
- Do not invent build commands that the repository does not contain.