# InteractoGraph

InteractoGraph is an automated solution for visualizing engagement metrics on DEV community articles, with support for other platforms. It uses GitHub Actions, Cypress for data collection, and Google Charts for visualization.

## Features

- Scrapes engagement data (comments and reactions)
- Visualizes data using Google Charts
- Deploys dashboards via GitHub Pages
- Simple setup and customization

## Quick Start

1. Clone the repository.
2. Customize the user in `./cypress/e2e/0-mine/all_in_one.cy.js`.
3. Push changes to trigger GitHub Actions.

## Details

Key scripts and workflows:
- CI/CD: [`.github/workflows/do-ci.yml`](.github/workflows/do-ci.yml)
- Data integration: [`updateHtml.js`](./cypress/e2e/0-mine/updateHtml.js)