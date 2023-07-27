import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "Image prompt is required"
    }),
    amount: z.string().min(1),
    resolution: z.string().min(1),
});

export const amountOptions = [
    {
        value: "1",
        label: "1 Photo"
    },
    {
        value: "2",
        label: "2 Photos"
    },
    {
        value: "3",
        label: "3 Photos"
    },
    {
        value: "4",
        label: "4 Photos"
    },
    {
        value: "5",
        label: "5 Photos"
    },
];

export const resolutionOptions = [
    {
        value: "256x256",
        label: "256x256"
    },
    {
        value: "512x512",
        label: "512x512"
    },
    {
        value: "1024x1024",
        label: "1024x1024"
    },
    {
        value: "1280x720",
        label: "1280x720"
    },
    {
        value: "1920x1080",
        label: "1920x1080"
    },
    {
        value: "2560x1440",
        label: "2560x1440"
    },

]