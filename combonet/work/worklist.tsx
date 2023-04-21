import * as React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import { IFeaturedProps } from "../home/featured";

export interface IWorkListProps {
  workslist: IFeaturedProps[];
}

export function WorkList({ workslist }: IWorkListProps) {
  return (
    <>
      {workslist.map((item) => {
        return (
          <Box key={item.id}>
            <Stack direction={"row"}>
              <Box>
                <img
                  src={item.image}
                  style={{ borderRadius: "5px", marginRight: "15px" }}
                  width={248}
                  height={180}
                  alt=''
                />
              </Box>
              <Box>
                <Typography variant='h5' fontWeight='bold' mb={2}>
                  {item.title}
                </Typography>
                <Stack direction={"row"} alignItems='center'>
                  <Button
                    sx={{
                      background: "#142850",
                      width: "62px",
                      height: "25px",
                      borderRadius: "15px",
                      marginRight: "20px",
                    }}>
                    2020
                  </Button>
                  <Typography color='gray'>{item.tagList}</Typography>
                </Stack>
                <Typography mt={2}>{item.description}</Typography>
              </Box>
            </Stack>
            <hr style={{ marginTop: "15px", marginBottom: "25px" }} />
          </Box>
        );
      })}
    </>
  );
}
