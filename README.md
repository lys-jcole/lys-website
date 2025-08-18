# LYS Website

This is the official website for LYS, built with [Next.js](https://nextjs.org/) and fully internationalized using [next-intl](https://next-intl.dev/). The site showcases LYS's mission, solutions, and team, and provides information for potential clients and partners.

## Features

- Modern, responsive design
- Built with Next.js App Router (app directory)
- Internationalization (i18n) with next-intl and JSON message files
- Custom, reusable components for all sections (About, Solutions, Why Choose Us, etc.)
- Optimized for performance and accessibility
- TypeScript throughout

## Project Structure

- `app/` — Main application pages, layouts, and locale routing
- `components/` — Reusable UI and section components (all text is localized via the `t` prop)
- `lib/` — Utility functions
- `public/` — Static assets (images, icons, etc.)
- `messages/` — Localization message files (e.g., `en.json`)

## Internationalization (i18n)

All user-facing text is managed in `messages/en.json` (and other locale files as needed). Components receive a `t` prop (from next-intl's `useTranslations('HomePage')`) and use keys like `t('hero.title')` for all content. To add or update text, edit the relevant message file and use the key in your component.

## Development Workflow

### Branches
All feature development should branch off `main`. To create a new feature branch and open a pull request:

1. Update your local repository:
	```bash
	git checkout main
	git pull origin main
	```
2. Create and switch to a new branch:
	```bash
	git checkout -b my-feature-branch
	```
3. Make your changes and commit them:
	```bash
	git add .
	git commit -m "Describe your changes"
	```
4. Push your branch to GitHub:
	```bash
	git push origin my-feature-branch
	```
5. Open a pull request (PR) from your branch to `main` using the GitHub UI.

All PRs should be reviewed before merging.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
	```bash
	git clone https://github.com/lys-jcole/lys-website.git
	cd lys-website
	```
2. Install dependencies:
	```bash
	npm install
	```

### Running the Development Server

Start the local dev server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Customization

Edit the content and components in the `components/` and `app/` directories to update the site. All text should be referenced via the `t` prop and message files. Styles can be modified in `app/globals.css` or within component files.

## Deployment

Deployment is handled via Vercel or your preferred Next.js-compatible platform. Ensure you are deploying from the `main` branch for production.

## License

TBD
