import { Box, Stack } from "@mui/material";
import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { LayoutProps } from "@/modal/main";
import Container from "@mui/material/Container";

export function Main({ children }: LayoutProps) {
  return (
    <Stack minHeight='100vh'>
      <Header />
      <Box flexGrow={1}>
        <Box>{children}</Box>
      </Box>
      <Footer />
    </Stack>
  );
}
