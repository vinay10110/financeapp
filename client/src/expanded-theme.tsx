// eslint-disable-next-line @typescript-eslint/no-unused-vars
import  "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }
  interface Palette {
    tertiary: PaletteColor;
  }
}