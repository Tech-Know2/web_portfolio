import { defineField, defineType } from "sanity";

export const platformToolType = defineType({
    name: "platformTool",
    title: "Platform / Tool",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Frontend", value: "frontend" },
                    { title: "Backend", value: "backend" },
                    { title: "Database", value: "database" },
                    { title: "DevOps", value: "devops" },
                    { title: "Game Dev", value: "gamedev" },
                    { title: "Cloud", value: "cloud" },
                    { title: "Tools", value: "tools" },
                    { title: "Other", value: "other" },
                ],
            },
            initialValue: "tools",
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