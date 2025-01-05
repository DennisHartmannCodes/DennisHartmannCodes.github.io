import plugin from "tailwindcss/plugin";

const variables = [
  {
    name: "layer-0",
    light: "#f6f6f8",
    dark: "#14161a",
  },
  {
    name: "layer-1",
    light: "#e0e3e7",
    dark: "#24272c",
  },
  {
    name: "layer-2",
    light: "#d1d5db",
    dark: "#33383e",
  },
  {
    name: "shadow",
    light: "#14161a40",
    dark: "#eff1f340",
  },
  {
    name: "link",
    light: "#2698ba",
    dark: "#2698ba",
  },
  {
    name: "accent",
    light: "#2698ba",
    dark: "#2698ba",
  },
  {
    name: "border",
    light: "#14161a",
    dark: "#eff1f3",
  },
  {
    name: "text",
    light: "#14161a",
    dark: "#eff1f3",
  },
  {
    name: "white",
    light: "#eff1f3",
    dark: "#eff1f3",
  },
  {
    name: "black",
    light: "#14161a",
    dark: "#14161a",
  },
];

const cssVariables = theme => Object.fromEntries(variables.map(v => [`--${v.name}`, v[theme]]));
const light = cssVariables("light");
const dark = cssVariables("dark");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: [
    "variant",
    ["@media (prefers-color-scheme: dark) { &:not(.light *) }", "&:is(.dark *)"],
  ],
  theme: {
    colors: Object.fromEntries(variables.map(({ name }) => [name, `var(--${name})`])),
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": light,
        "@media (prefers-color-scheme: dark)": {
          ":root": dark,
        },
        ".light": light,
        ".dark": dark,
      });
    }),
  ],
};
