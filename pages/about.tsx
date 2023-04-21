import React, { FunctionComponent, useEffect } from "react";
import Auth from "@/combonet/auth";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

interface Props {}
const AboutComponent: FunctionComponent<Props> = () => {
  const { profile, firtloading } = Auth();
  let router = useRouter();

  useEffect(() => {
    console.log(!firtloading && !profile?.username);
    if (!firtloading && !profile?.username) {
      router.push("/login");
    }
  }, [firtloading, profile, router]);
  if (!profile?.username) {
    return <div>LOding...</div>;
  }
  return (
    <Box>
      <Typography
        component={"h1"}
        variant='h3'
        sx={{ color: "green", fontWeight: "bold" }}>
        About page
      </Typography>
    </Box>
  );
};

export default AboutComponent;
