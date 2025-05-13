import React from "react";
import { Box } from "@mui/material";

interface OccupancyStatusBarProps {
  rate: number;
  color: string;
}

const OccupancyStatusBar: React.FC<OccupancyStatusBarProps> = ({
  rate,
  color,
}) => {
  return (
    <Box sx={{ width: "100%", position: "relative", height: "2px" }}>
      <Box
        sx={{
          width: "100%",
          height: "2px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "1px",
        }}
      />

      <Box
        sx={{
          width: `${rate}%`,
          height: "2px",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          borderRadius: "1px",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </Box>
  );
};

export default OccupancyStatusBar;
