import type { CollectionConfig } from 'payload'
import { Pages } from '../Pages'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'

const Articles: CollectionConfig<'pages'> = {
  ...Pages,
  slug: 'articles',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt', 'status', 'department'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'articles',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'articles',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    ...Pages.fields,
    {
      name: 'author',
      type: 'relationship',

      relationTo: 'contributors',
      hasMany: true,

      admin: {
        allowCreate: true,
        allowEdit: true,
        description: 'Select the author(s) of this article.',
        position: 'sidebar',
      },
    },
    {
      name: 'department',
      label: 'Department',
      admin: {
        description: 'Select the department this article belongs to.',
        position: 'sidebar',
      },
      type: 'relationship',
      relationTo: 'departments',
      hasMany: false,
    },
  ],
}

// append some fields to the tabs field
Articles.fields.forEach((field) => {
  if (field.type === 'tabs') {
    field.tabs.push({
      label: 'Issue',
      fields: [
        {
          name: 'issue',
          label: 'Issue',
          type: 'text',
        },
      ],
    })
  }
})
export { Articles }
