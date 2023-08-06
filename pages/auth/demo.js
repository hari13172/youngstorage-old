import React from "react";
import muiskeleton from "@/component/muiskeleton";
import { Skeleton, Box, Avatar, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";

const demo = () => {
  const [loading, SetLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetLoding(false);
    }, 3000);
  }, []);
  return (
    <div>
      <Box sx={{ width: "250px" }}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={250}
            height={150}
            animation="wave"
          />
        ) : (
          <img
            src="https://source.unsplash.com/random/250x150"
            alt="skeleton"
            width={250}
            height={150}
          />
        )}

        <Stack
          direction="row"
          spacing={1}
          sx={{ width: "100px", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar>V</Avatar>
          )}

          <Stack sx={{ width: "80%" }}>
            {loading ? (
              <>
                <Typography variant="body1">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
                {/* <Typography variant="body2">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography> */}
              </>
            ) : (
              <Typography variant="body1">react</Typography>
            )}
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default demo;
