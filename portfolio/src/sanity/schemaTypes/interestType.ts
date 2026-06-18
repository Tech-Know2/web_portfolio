import { defineField, defineType } from "sanity";

export const interestType = defineType({
    name: "interest",
    title: "Interest",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Economics", value: "economics" },
                    { title: "Technology", value: "technology" },
                    { title: "Engineering", value: "engineering" },
                    { title: "Science", value: "science" },
                    { title: "Finance", value: "finance" },
                    { title: "Other", value: "other" },
                ],
            },
            initialValue: "other",
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