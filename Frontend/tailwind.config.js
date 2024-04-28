/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const scrollBar = require("tailwind-scrollbar");
const lineClamp = require("@tailwindcss/line-clamp");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
    theme: {
        extend: {},
    },
    plugins: [flowbite.plugin(), scrollBar, lineClamp],
};
