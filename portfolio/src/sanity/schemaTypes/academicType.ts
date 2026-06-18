import { defineField, defineType } from "sanity";

export const academicAchievementType = defineType({
    name: "academicAchievement",
    title: "Academic Achievement",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "score",
            title: "Score / Result",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "date",
            title: "Date / Year",
            type: "string",
            validation: (Rule) => Rule.required(),
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