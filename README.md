<div align="center">

# Bhuvan

**A lightweight portfolio and brand website for presenting identity, visual work, content, and contact information through a clear responsive experience.**

![Top language](https://img.shields.io/github/languages/top/Nischhalsubba/Bhuvan?style=flat-square)
![Last commit](https://img.shields.io/github/last-commit/Nischhalsubba/Bhuvan?style=flat-square)
![Repo size](https://img.shields.io/github/repo-size/Nischhalsubba/Bhuvan?style=flat-square)

[Browse website](./site) · [Technical README](./site/README.md) · [Issues](https://github.com/Nischhalsubba/Bhuvan/issues)

</div>

## Overview

**Bhuvan** is a portfolio / brand website implemented with PHP, HTML, CSS, and JavaScript. The maintained website lives under `site/` and includes page content, shared PHP sections, styling, scripts, imagery, and project documentation.

| Audience | What matters most |
|---|---|
| Visitors | Clear identity, work, content, and contact paths |
| Developers | PHP/HTML structure, reusable layout pieces, CSS and JavaScript |
| Designers | Hierarchy, typography, imagery, responsive behavior and states |
| Content owners | Accurate copy, portfolio material, metadata and contact details |

<details open>
<summary><strong>🏗️ Interactive website architecture</strong></summary>

```mermaid
flowchart LR
    VISITOR["Visitor"] --> PAGE["HTML / PHP pages"]
    PAGE --> SHARED["Header / navigation / footer"]
    PAGE --> CONTENT["Portfolio & brand content"]
    STYLE["CSS"] --> PAGE
    SCRIPT["JavaScript"] --> PAGE
    MEDIA["Images / assets"] --> CONTENT
    PAGE --> BROWSER["Responsive browser experience"]
```

</details>

## Visitor flow

```mermaid
flowchart TD
    LAND["Land on Bhuvan"] --> INTRO["Understand identity / purpose"]
    INTRO --> EXPLORE["Explore work or content"]
    EXPLORE --> DETAIL["View relevant details"]
    DETAIL --> CONTACT["Find contact / next action"]
    CONTACT --> OUTCOME["Connect or continue exploring"]
```

## Repository map

```text
Bhuvan/
├── .github/     # repository automation
├── site/        # maintained website
└── README.md    # project front door
```

See [`site/README.md`](./site/README.md) for the deeper branch-aware technical guide.

## Getting started

```bash
git clone https://github.com/Nischhalsubba/Bhuvan.git
cd Bhuvan/site
```

The website contains static HTML alongside PHP entry points. Use a PHP-capable local server when testing PHP behavior; static pages can also be reviewed directly or through a simple HTTP server.

## Design & accessibility

Prioritize a clear first impression, consistent spacing and typography, useful image alternatives, responsive layouts, keyboard-visible focus, readable contrast, and an obvious contact path. Changes should preserve the relationship between shared navigation, page content, and visual hierarchy.

## SEO & discoverability

Public pages should use a unique title and description, one clear primary heading, semantic sections, descriptive links, meaningful image alt text, canonical URLs where appropriate, and Open Graph/social metadata. Keep project, portfolio, brand, and page-specific terms in natural readable copy rather than repeating them mechanically.

## Contribution flow

```mermaid
flowchart LR
    CHANGE["Focused change"] --> LOCAL["Test locally"]
    LOCAL --> RESPONSIVE["Review responsive layout"]
    RESPONSIVE --> ACCESS["Check accessibility"]
    ACCESS --> DOCS["Update docs if structure changed"]
    DOCS --> PR["Open pull request"]
```
