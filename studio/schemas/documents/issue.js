export default {
  name: 'issue',
  type: 'document',
  title: 'Issue',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      option: {
        source: 'title'
      }
    },    
    {
      name: 'documentUrl',
      type: 'string',
      title: 'Document URL'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share this page in social media.'
    },
    {
      name: 'description',
      type: 'excerptPortableText',
      title: 'Description'
    },
    {
      name: 'posts',
      type: 'array',
      title: 'Articles',
      of: [
        {
          type: 'reference',
          to: {
            type: 'post'
          }
        }
      ]
    }
  ]
}
