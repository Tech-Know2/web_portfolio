import { defineField, defineType } from "sanity";

export const educationType = defineType({
    name: "education",
    title: "Education",
    type: "document",
    fields: [
        defineField({
            name: "degree",
            title: "Degree / Program",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "institution",
            title: "Institution",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "gpa",
            title: "GPA",
            type: "string",
        }),
        defineField({
            name: "startYear",
            title: "Start Year",
            type: "string",
        }),
        defineField({
            name: "endYear",
            title: "End Year",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "highlight",
            title: "Highlight",
            type: "boolean",
            initialValue: true,
        }),
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
            initialValue: 0,
        }),
    ],
});