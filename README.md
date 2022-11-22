# Gatsby Starter Dogmatism

This is a quite opinionated Gatsby starter based on [Gatsby's default starter](https://github.com/gatsbyjs/gatsby-starter-default). It features:

- **Gatsby Configuration with Typescript** using [native Typescript support](https://www.gatsbyjs.com/docs/reference/release-notes/v4.9/#support-for-typescript-in-gatsby-config-and-gatsby-node)
- **GraphQL type generation** using [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator)
  - There are plugins (e. g. [gatsby-plugin-graphql-codegen](https://www.gatsbyjs.com/plugins/gatsby-plugin-graphql-codegen/)) for Gatsby which integrate this directly into the lifecycle of Gatsby. These plugins are sometimes not updated for a while or every time you want to regenerate the types you have to restart Gatsby.
- **Styling with Emotion** using [gatsby-plugin-emotion](https://www.gatsbyjs.com/plugins/gatsby-plugin-emotion/) and themes.
- **VSCode Development Container** configuration using [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) allowing a quick start into development.
- **Internationalization** using [gatsby-plugin-i18n-l10n](https://github.com/openscript-ch/gatsby-plugin-i18n-l10n) and [i18n-ally](https://github.com/lokalise/i18n-ally).
- **Github Actions** for automatic deployment to [Github Pages](https://pages.github.com/).
- **ESLint and Prettier** configuration helping to write nice, homogeneous code.

> When I used Gatsby for the first time, it wasn't difficult to getting started. What puzzled me is how to structure and organize the project with all it's components and other bits neatly. The main reason I've created this starter, to provide an example how to structure a Gatsby website.

## Getting started

1. **Use** Gatsbys CLI `gatsby new my-new-fancy-website https://github.com/openscript-ch/gatsby-starter-dogmatism` or click `Use this template` on the [repository page](https://github.com/openscript-ch/gatsby-starter-dogmatism) to get a copy.
1. **Open** the new project with Visual Studio Code and [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
1. **Install** the projects dependencies with `yarn install`.
1. **Run** the project with `yarn develop`.
1. **Configure** the Github repository to make automated deployment to Github Pages work:
   1. Got to `Settings` > `Actions` > `General` > `Workflow permissions` and activate `Read and write permissions`.

## Configuration

- [gatsby-config.ts](./.gatsby/gatsby-config.ts):

  - `siteMetadata.title`: Set the websites title

- Environment variables:
  - `PATH_PREFIX`: Adds a prefix to all paths. This is useful if you host this project on a subpath like `https://example.github.io/gatsby-starter-dogmatism`.
