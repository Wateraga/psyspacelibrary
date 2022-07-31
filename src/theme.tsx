// theme.tsx

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

// 2. Add your color mode config and set the initalColorMode to the theme intended to show initally
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  components: {
    Steps,
  },
  config,
});

export default theme;
