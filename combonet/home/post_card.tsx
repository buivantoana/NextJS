import { Box, Card, Stack, Typography } from "@mui/material";
import * as React from "react";

export interface IPostCardProps {
  name: string;
}

export function PostCard(props: IPostCardProps) {
  return (
    <Card sx={{ padding: "20px" }}>
      <Typography fontWeight='bold' mb={2} variant='h5'>
        {props.name}
      </Typography>
      <Stack direction='row' justifyContent='flex-start' mb='11px'>
        <Box pr={2} borderRight={1}>
          <Typography>12 Feb 2020</Typography>
        </Box>
        <Box px={2}>
          <Typography>Design, Pattern</Typography>
        </Box>
      </Stack>
      <Typography>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Typography>
    </Card>
  );
}
