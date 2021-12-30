# Gatsby Starter Dogmatism

This is a quite opinionated Gatsby starter based on [Gatsby's default starter](https://github.com/gatsbyjs/gatsby-starter-default). It features:

- **Gatsby Configuration with Typescript** using [gatsby-ts](https://github.com/Js-Brecht/gatsby-plugin-ts-config/tree/gatsby-ts)
- **GraphQL type generation** using [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator)
  - There are plugins (e. g. [gatsby-plugin-graphql-codegen](https://www.gatsbyjs.com/plugins/gatsby-plugin-graphql-codegen/)) for Gatsby which integrate this directly into the lifecycle of Gatsby. These plugins are sometimes not updated for a while or every time you want to regenerate the types you have to restart Gatsby.
- **Styling with Emotion** using [gatsby-plugin-emotion](https://www.gatsbyjs.com/plugins/gatsby-plugin-emotion/) and themes.
- **Preconfigured VSCode Development Container** using [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- **Internationalization with react-intl** using [react-intl](https://formatjs.io/docs/react-intl/), a [local plugin](./plugins/gatsby-plugin-i18n-l10n) and [i18n-ally](https://github.com/lokalise/i18n-ally).
- **Preconfigured Github Actions** for automatic deployment to [Github Pages](https://pages.github.com/).

> When I used Gatsby for the first time, it wasn't difficult to getting started. What puzzled me is how to structure and organize the project with all it's components and other bits neatly. The main reason I've created this starter, to provide an example how to structure a Gatsby website.

## Getting started

1. **Fork and clone** the repository `git clone https://github.com/openscript/gatsby-starter-dogmatism` or **use** Gatsbys CLI `gatsby new my-new-project https://github.com/openscript/gatsby-starter-dogmatism` to get a copy.
1. Optionally **open** the new project with Visual Studio Code and [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
1. **Install** the projects dependencies with `yarn install`.
1. **Run** the project with `yarn develop`.

## Configuration

- [gatsby-config.ts](./.gatsby/gatsby-config.ts):

  - `siteMetadata.title`: Set the websites title

- Environment variables:
  - `PATH_PREFIX`: Adds a prefix to all paths. This is useful if you host this project on a subpath like `https://example.github.io/gatsby-starter-dogmatism`.
