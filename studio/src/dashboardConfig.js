export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ed40a65987c7a594e356908',
                  title: 'CounterViews Admin',
                  name: 'counterviews-blog-studio',
                  apiId: '0ef549a3-129b-4c9e-a83b-d4458db2ab98'
                },
                {
                  buildHookId: '5ed40a65d52d63c248ecbcc9',
                  title: 'TheCounterViews',
                  name: 'thecounterviews-articles',
                  apiId: '4170dbcf-c13d-4b55-a9ec-92ee9be3009f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vishrutJha/counterviews-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://articles.thecounterviews.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
