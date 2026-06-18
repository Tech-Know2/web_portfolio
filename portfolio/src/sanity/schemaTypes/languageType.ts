import { defineField, defineType } from "sanity";

export const languageSkillType = defineType({
    name: "languageSkill",
    title: "Language Skill",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Language Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "proficiency",
            title: "Proficiency",
            type: "string",
            options: {
                list: [
                    { title: "Proficient", value: "proficient" },
                    { title: "Familiar", value: "familiar" },
                    { title: "Learning", value: "learning" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
            initialValue: 0,
        }),
    ],
});