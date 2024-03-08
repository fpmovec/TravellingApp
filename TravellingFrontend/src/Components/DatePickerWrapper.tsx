import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const DatePickerWrapper = ({ children }) => {
  return (
    <ThemeProvider
      theme={(theme) =>
        createTheme({
          ...theme,
        })
      }
    >
      {children}
    </ThemeProvider>
  );
};

export default DatePickerWrapper;
