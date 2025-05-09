import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  LinkFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TableOfContents: Block = {
  slug: 'table-of-contents',
  interfaceName: 'TableOfContentsBlock',
  fields: [
    {
      name: 'chapterTitle',
      type: 'text',
      label: 'Chapter Title',
      required: true,
    },
    {
      name: 'chapterNumber',
      type: 'text',
      label: 'Chapter Number',
      required: true,
    },
    {
      name: 'chapterSubHeading',
      type: 'textarea',
      label: 'Chapter Sub Heading',
    },
    {
      name: 'chapterEntries',
      type: 'array',
      label: 'Chapter Entries',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'headline',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature(), LinkFeature()]
            },
          }),
          label: false,
          required: true,
        },
      ],
    },
    {
      name: 'bgColor',
      type: 'text',
      label: 'Background Color',
      admin: {
        description: 'Enter a color name or hex code',
      },
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Text Color',
      admin: {
        description: 'Enter a color name or hex code',
      },
    },
  ],
}
