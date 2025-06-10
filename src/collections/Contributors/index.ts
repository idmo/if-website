import type { CollectionConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

const Contributors: CollectionConfig = {
  slug: 'contributors',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'bio',
      type: 'textarea',
      admin: {
        rows: 3,
      },
    },
    {
      name: 'articles',
      label: 'Articles',
      type: 'join',
      collection: 'articles',
      on: 'author',
      hasMany: true,
    },
  ],
}

export { Contributors }
