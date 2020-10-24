import { ITSConfigFn } from 'gatsby-plugin-ts-config';
import { defaultLanguage, languages, slugTranslation } from './i18n';

const trimRightSlash = (path: string) => {
  return path === '/' ? path : path.replace(/\/$/, '');
}

const generateTranslatedPaths = (path: string) => {
  const paths: { [key: string]: string } = {};

  languages.forEach((language) => {
    const trimmedPath = trimRightSlash(path);
    let newPath = slugTranslation[language][trimmedPath] ?? trimmedPath;
    if (language !== defaultLanguage) {
      newPath = `/${language}${newPath}`;
    }
    paths[language] = newPath;
  })

  return paths;
}

const node: ITSConfigFn<'node'> = () => ({
  onCreateNode: async ({ node, actions }) => {

  },
  onCreatePage: async ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    const paths = generateTranslatedPaths(page.path);

    deletePage(page);

    Object.keys(paths).forEach((language) => {
      const { [language]: currentPath, ...alternativeLanguagePaths } = paths;
      const context = { ...page.context, language, alternativeLanguagePaths };
      createPage({ ...page, path: currentPath, context });
    })
  }
});

export default node;
