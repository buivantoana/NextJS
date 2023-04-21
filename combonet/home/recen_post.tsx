import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { PostCard } from "./post_card";

export interface IRecentProps {}

export function Recent(props: IRecentProps) {
  return (
    <Box
      component='section'
      bgcolor='
#EDF7FA'
      pt={2}
      pb={4}>
      <Container>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          mb={2}>
          <Typography variant='h5'>Recent posts</Typography>
          <Link href='/Blog'>
            <Typography sx={{ color: "#00A8CC" }}>View all</Typography>
          </Link>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={3}
          sx={{
            "& > div": {
              width: {
                xs: "100%",
                md: "50%",
              },
            },
          }}>
          <Box>
            <PostCard name='Making a design system from scratch' />
          </Box>
          <Box>
            <PostCard name='Creating pixel perfect icons in Figma' />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
