export const tokens = {
    grey: {
      100: "#F8FAFC",
      200: "#F1F5F9",
      300: "#E2E8F0",
      400: "#CBD5E1",
      500: "#94A3B8",
      600: "#64748B",
      700: "#475569",
      800: "#334155",
      900: "#0F172A",
    },
    primary: {
      // vibrant violet
      100: "#EDE9FE",
        200: "#DDD6FE",
        300: "#C4B5FD",
        400: "#A78BFA",
        500: "#8B5CF6",
        600: "#7C3AED",
        700: "#6D28D9",
        800: "#5B21B6",
        900: "#4C1D95"
    },
    secondary: {
      // teal
      100: "#E0F2F1",
      200: "#B2DFDB",
      300: "#80CBC4",
      400: "#4DB6AC",
      500: "#26A69A",
      600: "#009688",
      700: "#00897B",
      800: "#00796B",
      900: "#00695C",
    },
    tertiary: {
      // accent pink/coral
      500: "#F43F5E",
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
      paper: "#FFFFFF",
      main: "#F8FAFC",
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
        paper: tokens.background.paper,
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