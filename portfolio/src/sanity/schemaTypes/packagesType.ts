import { defineField, defineType } from "sanity";

export const packageType = defineType({
    name: "package",
    title: "Package",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Package Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Framework", value: "framework" },
                    { title: "Library", value: "library" },
                    { title: "Module", value: "module" },
                    { title: "Provider", value: "provider" },
                    { title: "CLI", value: "cli" },
                    { title: "Template", value: "template" },
                    { title: "Other", value: "other" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "repositoryUrl",
            title: "Repository URL",
            type: "url",
        }),
        defineField({
            name: "packageUrl",
            title: "Package URL",
            description: "Link to npm or another package registry.",
            type: "url",
        }),
        defineField({
            name: "installCommand",
            title: "Installation Command",
            description: "Example: pnpm add @phestus/core",
            type: "string",
        }),
        defineField({
            name: "highlight",
            title: "Highlight",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
            initialValue: 0,
        }),
    ],
});
