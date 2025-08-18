# LYS Website

This is the official website for LYS, built with [Next.js](https://nextjs.org/). The site showcases LYS's mission, solutions, and team, and provides information for potential clients and partners.

## Features

- Modern, responsive design
- Built with Next.js App Router
- Custom components for About, Solutions, Why Choose Us, and more
- Optimized for performance and accessibility

## Project Structure

- `app/` — Main application pages and layout
- `components/` — Reusable UI and section components
- `lib/` — Utility functions
- `public/` — Static assets (images, icons, etc.)

## Setup & Development
### Environments

This project uses two main branches for environment management:

- **DEV**: Active development branch. All new features and fixes are merged here first.
- **PRD (main)**: Production branch. Stable, production-ready code is merged here.

Deployments and environment-specific configurations are handled based on the branch.

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

Edit the content and components in the `components/` and `app/` directories to update the site. Styles can be modified in `app/globals.css` or within component files.

## Deployment

TBD

## License

TBD
