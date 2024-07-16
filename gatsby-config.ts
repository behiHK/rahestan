import type { GatsbyConfig } from "gatsby";
import { join } from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Rahestan`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/rahestan-logo.png"
      }
    },
    {
      resolve: "gatsby-plugin-intl",
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: ["fa", "en"],
        // language file path
        defaultLanguage: "fa",
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
      },
    },
  ],
  developMiddleware: app => {
    app.listen(8000, '127.0.0.1');
  },
};

export default config;
