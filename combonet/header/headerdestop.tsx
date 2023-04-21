import * as React from "react";
import { Box, Stack, Link as MUIlink, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { ROUTER_LIST } from "./routes";
import Link from "next/link";
import { useRouter } from "next/router";

export interface IHeaderdestopProps {}

export function Headerdestop(props: IHeaderdestopProps) {
  let router = useRouter();

  return (
    <Box display={{ xs: "none", lg: "block" }} py={2}>
      <Container>
        <Stack direction='row' justifyContent='flex-end'>
          {ROUTER_LIST.map((route) => {
            return (
              <Link href={route.path} key={route.label}>
                <Typography
                  sx={
                    router.pathname === route.path
                      ? {
                          paddingLeft: "20px",
                          fontWeight: "bold",
                          color: "red",
                        }
                      : { paddingLeft: "20px", fontWeight: "bold" }
                  }>
                  {route.label}
                </Typography>
              </Link>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
