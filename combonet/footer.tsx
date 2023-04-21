import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import image1 from "../image/fb.png";
import image2 from "../image/insta.png";
import image3 from "../image/Linkedin.png";
import image4 from "../image/Vector.png";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <Box component='footer' py={2} textAlign='center'>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        gap={2}
        mb={2}>
        <Image src={image1} alt='' />
        <Image src={image2} alt='' />
        <Image src={image3} alt='' />
        <Image src={image4} alt='' />
      </Stack>
      <Typography>Copyright ©2020 All rights reserved </Typography>
    </Box>
  );
}
