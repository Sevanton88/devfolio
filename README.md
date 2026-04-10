# DevFolio

A retro CRT terminal portfolio built with HTML, CSS, and vanilla JavaScript. DevFolio presents personal profile content through an interactive command-line interface, combining a strong visual identity with a lightweight, dependency-free front end.

## Overview

DevFolio is designed as a single-page portfolio experience that feels like a vintage terminal booting into a personal operating system. Instead of conventional sections and cards, visitors explore the portfolio by typing commands such as `about`, `projects`, `skills`, and `contact`.

The project focuses on three things:

- A distinctive presentation style with CRT-inspired visuals, scanlines, glow, and terminal framing.
- A smooth interactive experience powered by a small custom command engine.
- Easy customization through one central JavaScript data object.

## Live Experience

The portfolio opens with a boot sequence, renders animated terminal output, supports command history and autocomplete, and keeps the entire experience inside a stylized CRT viewport. The result is a portfolio that is both memorable and technically clean.

## Features

- Retro CRT interface with bezel, glow, scanlines, and phosphor-inspired color palette.
- Interactive terminal input with command parsing and animated output rendering.
- Boot sequence with ASCII banner and staged loading messages.
- Command history using arrow keys.
- Tab-based command autocomplete.
- `Ctrl+L` terminal clear shortcut.
- `Ctrl+C` typing interruption behavior.
- Centralized content management through a single `DATA` object.
- Responsive layout that adapts to smaller screens.
- Footer signature styling for stronger personal branding.

## Available Commands

The terminal currently supports the following commands:

| Command | Description |
| --- | --- |
| `help` | Displays all available commands |
| `about` | Shows personal introduction and summary |
| `skills` | Lists technical skills by category |
| `projects` | Displays portfolio projects with descriptions and links |
| `experience` | Shows work experience |
| `education` | Shows education background |
| `contact` | Displays contact information |
| `social` | Displays public profile links |
| `fun` | Shows personal fun facts |
| `whoami` | Prints a short identity summary |
| `ls` | Lists projects in terminal-style format |
| `banner` | Renders the ASCII title banner |
| `date` | Shows the current local date and time |
| `echo [text]` | Prints custom text to the terminal |
| `sudo` | Displays a playful terminal response |
| `clear` | Clears terminal output |

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Google Fonts (`VT323` and `Share Tech Mono`)

## Project Structure

```text
devfolio/
├── index.html
├── style.css
├── app.js
└── README.md
```

## Architecture Notes

### `index.html`

Defines the CRT shell, terminal layout, overlays, input region, mobile hint, and footer signature.

### `style.css`

Handles the full visual system, including:

- CRT bezel and screen styling
- Scanline and glow overlays
- Terminal typography and output states
- Responsive layout adjustments
- Footer presentation

### `app.js`

Contains two core layers:

1. A customizable `DATA` object with profile content, projects, experience, education, and social links.
2. A small terminal engine responsible for boot output, command execution, typing effects, history navigation, autocomplete, and interaction behavior.

## Customization

The portfolio is intentionally simple to personalize.

Open `app.js` and update the `DATA` object to change:

- Name
- Title
- Location
- Email
- Social links
- About text
- Skills
- Projects
- Experience
- Education
- Fun facts

No build step or framework configuration is required.

## Local Development

Because this is a static project, you can run it in several simple ways.

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Use VS Code Live Server

If you use Visual Studio Code, run the project with a local development server such as Live Server for a cleaner preview workflow.

### Option 3: Use a lightweight local server

If you have Node.js installed, you can serve the project with any static server of your choice.

## GitHub Pages Deployment

This project is well suited for GitHub Pages.

### Basic deployment flow

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to the Pages section.
4. Set the source to deploy from the main branch.
5. Select the root directory.
6. Save and wait for GitHub Pages to publish the site.

Once deployed, your portfolio will be available at your GitHub Pages URL.

## Why This Project Stands Out

DevFolio avoids the usual portfolio template pattern. Instead of relying on generic sections, icon grids, and standard hero layouts, it creates a focused interaction model that reinforces the developer identity of the site owner.

The strongest qualities of the project are:

- Clear visual direction instead of a generic layout.
- Strong consistency between interface concept and content delivery.
- Lightweight implementation with no unnecessary dependencies.
- Easy maintenance because all profile content is centralized.

## Review Notes

During review, the application was found to be in solid shape overall for a static portfolio project.

Strengths:

- Clean separation between structure, styling, and behavior.
- Well-organized content model through the `DATA` object.
- Consistent visual design language.
- Good feature depth for a vanilla JavaScript terminal interface.

Issue addressed before publication:

- Fixed terminal input handling so only `Ctrl+C` interrupts typed output, rather than allowing the plain `c` key through during active typing.

## Future Enhancements

- Add clickable links for project and contact output.
- Add command aliases such as `repo`, `mail`, or `resume`.
- Add theme variants such as amber or monochrome terminal modes.
- Add support for deep-linking specific commands through URL parameters.
- Add analytics or lightweight usage tracking if desired.

## Author

Dušan Šević  
Frontend & WordPress Developer  
[Website](https://dusans.dev)  
[GitHub](https://github.com/Sevanton88)  
[LinkedIn](https://rs.linkedin.com/in/du%C5%A1an-%C5%A1evi%C4%87/)

## License

This project is available for personal and portfolio use. Add a formal license if you want to define reuse terms publicly on GitHub.
