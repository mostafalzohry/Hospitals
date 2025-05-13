import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { CareType } from "../types/hospital";
import OccupancyStatusBar from "./OccupancyStatusBar";
import BedIcon from "@mui/icons-material/Bed";

interface CareTypeRowProps {
  careType: CareType;
}

const CareTypeRow: React.FC<CareTypeRowProps> = ({ careType }) => {
  return (
    <Box
      sx={{
        width: "100px",
        backgroundColor: careType.color,
        borderRadius: 1,
        p: 0.6,
        position: "relative",
        height: "60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 0.3,
        }}
      >
        <Typography
          variant="caption"
          fontWeight="bold"
          sx={{ color: "white", fontSize: "0.7rem" }}
        >
          {careType.title}
        </Typography>
        <Typography
          variant="caption"
          fontWeight="bold"
          sx={{ color: "white", fontSize: "0.7rem" }}
        >
          {careType.rate}%
        </Typography>
      </Box>

      <OccupancyStatusBar rate={careType.rate} color={careType.color} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 0.5,
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BedIcon sx={{ color: "white", fontSize: 12, mr: 0.2 }} />
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{ color: "white", fontSize: "0.65rem" }}
          >
            {careType.total}
          </Typography>
        </Box>

        <Typography
          variant="caption"
          fontWeight="bold"
          sx={{ color: "white", fontSize: "0.65rem" }}
        >
          V:{careType.vacant}
        </Typography>
      </Box>
    </Box>
  );
};

export default CareTypeRow;
