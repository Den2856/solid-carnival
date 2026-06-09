export const palette = {
  main: "#FFF200",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#D9EDFE",
  dark: "#0D0D0D",
  "black-5": "rgb(0 0 0 / 5%)",
  transparent: "transparent",
} as const

export type PaletteKey = keyof typeof palette