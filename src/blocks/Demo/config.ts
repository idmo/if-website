import type { Block } from 'payload'

export const Demo: Block = {
  slug: 'table-of-contents',
  interfaceName: 'DemoBlock',
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
      label: 'Chapter Nubmer',
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
          type: 'text',
          label: 'Headline',
        },
        {
          name: 'articleUrl',
          type: 'text',
          label: 'Link to Article',
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
