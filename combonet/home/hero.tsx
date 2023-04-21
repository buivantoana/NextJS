import Image from "next/image";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import * as React from "react";
import image from "../../image/Ellipse 1.png";

export interface IHeroProps {}

export function Hero(props: IHeroProps) {
  return (
    <Box component={"section"} mt={{ xs: 4, md: 18 }} mb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}>
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Typography component='h1' variant='h3' sx={{ fontWeight: "bold" }}>
              Hi, I am John,<br></br> Creative Technologist
            </Typography>
            <Typography my={{ xs: 3, md: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Button variant='contained'>Download Resume</Button>
          </Box>
          <Box
            sx={{
              minWidth: "240px",
              boxShadow: "-5px 13px #EDF7FA",
              borderRadius: "50%",
            }}>
            <Image src={image} layout='responsive' alt='avatar' />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
