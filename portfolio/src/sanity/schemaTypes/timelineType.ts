import { defineField, defineType } from "sanity";

export const timelineEventType = defineType({
    name: "timelineEvent",
    title: "Timeline Event",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "hashtags",
            title: "Hashtags",
            type: "string",
        }),
        defineField({
            name: "badge",
            title: "Badge Type",
            type: "string",
            options: {
                list: [
                    { title: "Internship", value: "Internship" },
                    { title: "Project", value: "Project" },
                    { title: "Personal", value: "Personal" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "importance",
            title: "Importance",
            type: "number",
            initialValue: 2,
        }),
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
            initialValue: 0,
        }),
        defineField({
            name: "highlight",
            title: "Highlight",
            type: "boolean",
            initialValue: true,
        }),
    ],
});