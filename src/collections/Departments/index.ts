import type { CollectionConfig } from 'payload'
import { Categories } from '../Categories'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

const Departments: CollectionConfig<'categories'> = {
  ...Categories,
  slug: 'departments',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    ...Categories.fields,
    {
      name: 'issue',
      label: 'Issue',
      type: 'select',
      options: [
        {
          label: 'Issue 1',
          value: 'issue-1',
        },
        {
          label: 'Issue 2',
          value: 'issue-2',
        },
        {
          label: 'Issue 3',
          value: 'issue-3',
        },
      ],
    },
    {
      name: 'articles',
      label: 'Articles in this Department',
      type: 'join',
      collection: 'articles',
      on: 'department',
      hasMany: true,
    },
  ],
}
export { Departments }
