export const tokens = {
    grey: {
      100: "#000000",
      200: "#000000",
      300: "#000000",
      400: "#000000",
      500: "#000000",
      600: "#000000",
      700: "#000000",
      800: "#000000",
      900: "#000000",
    },
    primary: {
      // light green
      100: "#d0f0fc",
        200: "#a0e0f9",
        300: "#71d0f5",
        400: "#41c0f2",
        500: "#12b0ef",
        600: "#0e80bf",
        700: "#0b508f",
        800: "#073057",
        900: "#042028"
    },
    secondary: {
      // yellow
      100: "#fcf0dd",
      200: "#fae1bb",
      300: "#f7d299",
      400: "#f5c377",
      500: "#f2b455",
      600: "#c29044",
      700: "#916c33",
      800: "#614822",
      900: "#302411",
    },
    tertiary: {
      // purple
      500: "#f2b455",
    },
    blue:{
        100: "#d0f0fc",
        200: "#a0e0f9",
        300: "#71d0f5",
        400: "#41c0f2",
        500: "#12b0ef",
        600: "#0e80bf",
        700: "#0b508f",
        800: "#073057",
        900: "#042028"
       
    },
    background: {
      light: "#FFFFFF",
      main: "#FFFFFF",
    },
  };
  
  // mui theme settings
  export const themeSettings = {
    palette: {
      primary: {
        ...tokens.primary,
        main: tokens.primary[500],
        light: tokens.primary[400],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[500],
      },
      tertiary: {
        ...tokens.tertiary,
      },
      blue:{
        ...tokens.blue,
      },
      grey: {
        ...tokens.grey,
        main: tokens.grey[500],
      },
      background: {
        default: tokens.background.main,
        light: tokens.background.light,
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 800,
        color: tokens.grey[200],
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
        color: tokens.grey[300],
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
        color: tokens.grey[500],
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 10,
        color: tokens.grey[700],
      },
    },
  };