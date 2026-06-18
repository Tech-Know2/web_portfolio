import { defineField, defineType } from "sanity";

export const resumeType = defineType({
    name: "resume",
    title: "Resume",
    type: "document",
    fields: [
        defineField({
            name: "resume",
            title: "Resume PDF",
            type: "file",
            options: {
                accept: ".pdf",
            },
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "label",
            title: "Button Label",
            type: "string",
            initialValue: "Download Resume",
        }),
    ],
});