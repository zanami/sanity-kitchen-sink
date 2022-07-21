export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62d8d8d0d7b57a6475a4fdf7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6xo69mg9',
                  apiId: '69731cf7-d40d-4694-a3be-9279fd523e27'
                },
                {
                  buildHookId: '62d8d8d0acc0ba671e55cddd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sag553g3',
                  apiId: '0aed17ae-909e-49a9-88d6-3c824fddfede'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zanami/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sag553g3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
