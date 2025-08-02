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
                'NOTE: Automated Deployments are in place, however, If you don\'t see the update, please click below to deploy manually',
              sites: [
                {
                  buildHookId: '688d8ea2152c945ec2ed8a80',
                  title: 'TheCounterViews',
                  name: 'theCounterViews-Site',
                  apiId: 'e3b327b8-45ac-4de6-a03d-ca1cb7fdf559'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vishrutJha/counterviews-ssg',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://thecounterviews.in', category: 'apps' },
          { title: 'Frontend', value: 'https://thecounterviews.com', category: 'apps' }
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
