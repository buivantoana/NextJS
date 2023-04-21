import * as React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "next/link";

interface Blog {
  listBlog: [
    {
      slug: string;
      title: string;
      author: string;
      author_title: string;
      author_url: string;
      author_image_url: string;
      image: string;
      tags: string;
      markdowHtml: string;
      description: string;
    }
  ];
}
export function Blog({ listBlog }: Blog) {
  return (
    <Box component='section'>
      <Container>
        <Box>
          <Typography variant='h3' fontWeight='bold' mt='70px'>
            Blog
          </Typography>
        </Box>
        {listBlog.map((item) => {
          return (
            <Box key={item.slug} mt='40px'>
              <Link href={`blog/${item.slug}`}>
                <Typography variant='h5' fontWeight={500} mb='16px'>
                  {item.title}
                </Typography>
              </Link>
              <Stack direction='row'>
                <Typography pr='15px' style={{ borderRight: "1px solid gray" }}>
                  {item.author}
                </Typography>
                <Typography color='gray' px='15px'>
                  {item.tags}
                </Typography>
              </Stack>
              <Typography mt='10px'>{item.description}</Typography>
              <hr style={{ marginTop: "20px", marginBottom: "25px" }} />
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
