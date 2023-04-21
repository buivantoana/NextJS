import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { PostCard } from "./post_card";
import { WorkList } from "../work/worklist";

export interface IFeaturedProps {
  id: string;
  title: string;
  tagList: string;
  image: string;
  description: string;
}

export function Featured() {
  const workslist: IFeaturedProps[] = [
    {
      id: "1",
      title: "Designing Dashboards",
      tagList: "Dashboard",
      image:
        "https://4.bp.blogspot.com/-7yl0bnFz0i0/UkQCBriBnJI/AAAAAAAAAiA/tceMEfJHskk/s1600/anh-dep-hinh-nen-thien-nhien-7.jpg",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: "2",
      title: "Vibrant Portraits of 2020",
      tagList: "Illustration",
      image:
        "https://4.bp.blogspot.com/-7yl0bnFz0i0/UkQCBriBnJI/AAAAAAAAAiA/tceMEfJHskk/s1600/anh-dep-hinh-nen-thien-nhien-7.jpg",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: "3",
      title: "36 Days of Malayalam type",
      tagList: "Typography",
      image:
        "https://4.bp.blogspot.com/-7yl0bnFz0i0/UkQCBriBnJI/AAAAAAAAAiA/tceMEfJHskk/s1600/anh-dep-hinh-nen-thien-nhien-7.jpg",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  return (
    <Box component='section' pt={2} pb={4}>
      <Container>
        <Typography variant='h6' py={2}>
          Recent posts
        </Typography>
        <WorkList workslist={workslist} />
      </Container>
    </Box>
  );
}
