# Architecture

## Folders

- `src/`: Contains the source code of the project.
  - `components/`: Contains reusable and atomic UI components.
  - `content/`: Contains static content fitting the content collections defined in `content.config.ts`.
  - `integrations/`: Contains integration code for external or additional services.
  - `layouts/`: Contains unique, specific and non-reusable components.
    - `groups/`: Contains non-content components that represent a specific common area of each page (e.g., header, footer, sidebar).
    - `sections/`: Contains content layout components that represent specific sections of a layout.
    - `templates/`: Contains content wrapping components that define the overall structure of a page or layout.
    - `views/`: Contains page-level components that represent entire views or pages within the application.
  - `pages/`: Contains the top-level page components that serve as entry points for different routes within the application.
  - `translations/`: Contains translation files for user interface text and messages.
  - `types/`: Contains TypeScript type definitions used throughout the project.
  - `utils/`: Contains utility functions and helper modules used throughout the project.
