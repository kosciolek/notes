export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'ryan-waltz/next-netlify',
    branch: 'master',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'content/pages/home.md',
          fields: [
            {
              label: 'Hero Title',
              name: 'hero_title',
              widget: 'string',
            },
            {
              label: 'Hero Description',
              name: 'hero_description',
              widget: 'markdown',
            },
          ],
        },
        {
          label: 'Test',
          name: 'test',
          file: 'content/pages/test.md',
          fields: [
            {
              label: 'My Widget',
              name: 'my-widgetasd',
              widget: 'inp',
            },
          ],
        }
      ],
    },
  ],
};
