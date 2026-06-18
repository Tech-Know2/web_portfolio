import { ProjectsIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'featuredMedia',
      title: 'Featured Media',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Media Type',
          type: 'string',
          initialValue: 'image',
          options: {
            list: [
              { title: 'Image', value: 'image' },
              { title: 'Video', value: 'video' },
            ],
            layout: 'radio',
          },
        }),
        defineField({
          name: 'image',
          title: 'Featured Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          hidden: ({ parent }) => parent?.type !== 'image',
        }),
        defineField({
          name: 'videoUrl',
          title: 'Featured Video URL',
          type: 'url',
          hidden: ({ parent }) => parent?.type !== 'video',
        }),
      ],
    }),

    defineField({
      name: 'body',
      title: 'Project Details',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    defineField({
      name: 'challenges',
      title: 'Technical Challenges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Challenge Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Challenge Description',
              type: 'text',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'files',
      title: 'Downloads',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'File Title',
              type: 'string',
            }),
            defineField({
              name: 'file',
              title: 'File',
              type: 'file',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Media Type',
              type: 'string',
              initialValue: 'image',
              options: {
                list: [
                  { title: 'Image', value: 'image' },
                  { title: 'Video', value: 'video' },
                ],
                layout: 'radio',
              },
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              hidden: ({ parent }) => parent?.type !== 'image',
            }),
            defineField({
              name: 'videoUrl',
              title: 'Video URL',
              type: 'url',
              hidden: ({ parent }) => parent?.type !== 'video',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              mediaType: 'type',
              image: 'image',
              caption: 'caption',
            },
            prepare({ mediaType, image, caption }) {
              return {
                title: caption || `${mediaType} item`,
                subtitle: mediaType,
                media: image,
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'link',
      title: 'Live Link',
      type: 'url',
    }),

    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'highlight',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),

    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      featured: 'highlight',
    },
    prepare({ title, media, featured }) {
      return {
        title,
        subtitle: featured ? '⭐ Featured Project' : 'Project',
        media,
      }
    },
  },
})