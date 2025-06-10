import { CollectionConfig } from "payload/types";

const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "altText",
          type: "text",
        },
      ],
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },
    {
      name: "variants",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "options",
          type: "array",
          fields: [
            {
              name: "value",
              type: "text",
              required: true,
            },
            {
              name: "priceModifier",
              type: "number",
              defaultValue: 0,
            },
          ],
        },
      ],
    },
    {
      name: "inventoryCount",
      type: "number",
      defaultValue: 0,
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          label: "Draft",
          value: "draft",
        },
        {
          label: "Available",
          value: "available",
        },
        {
          label: "Sold Out",
          value: "soldOut",
        },
      ],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Products;
