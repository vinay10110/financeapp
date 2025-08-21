import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

type Props = {
  title: string;
  sideText: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[600]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem" color={palette.grey[900]}>
            {title}
          </Typography>
          <Typography variant="h6" color={palette.grey[600]}>{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Box
        sx={{
          px: "0.6rem",
          py: "0.2rem",
          borderRadius: "999px",
          background: `linear-gradient(90deg, ${palette.primary[100]}, ${palette.secondary[100]})`,
          color: palette.primary[700],
          fontWeight: 700,
          border: `1px solid ${palette.grey[300]}`,
        }}
      >
        <Typography variant="h5" fontWeight={700} color="inherit">
          {sideText}
        </Typography>
      </Box>
    </FlexBetween>
  );
};

export default BoxHeader;