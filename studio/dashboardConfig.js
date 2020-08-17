export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5f3a8e7bad43c4d2caa78bfe',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-mmxqbud1',
                  apiId: '36044385-20dd-4baf-84f0-67a783c30f24'
                },
                {
                  buildHookId: '5f3a8e7b1c8489973efad6b0',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-c8uavi4p',
                  apiId: 'a048558d-be5a-49e1-89f3-a1c048c5ef15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MikeLawton/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-c8uavi4p.netlify.app', category: 'apps'}
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
