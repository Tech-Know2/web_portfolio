import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const referenceDocType = defineType({
  name: 'referenceDoc',
  title: 'Reference Doc',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      type: 'string',
    }),
    defineField({
      name: 'company',
      type: 'string',
    }),
    defineField({
      name: 'position',
      type: 'string',
    }),
    defineField({
      name: 'personalNote',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'phoneNumber',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      type: 'url',
    }),
    defineField({
      name: "referenceDoc",
      title: "Reference Doc",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      company: 'company',
      position: 'position',
    },
    prepare({ firstName, lastName, company, position }) {
      return {
        title: [firstName, lastName].filter(Boolean).join(' ') || 'Unnamed Reference',
        subtitle: [position, company].filter(Boolean).join(' · '),
      }
    },
  },
})
