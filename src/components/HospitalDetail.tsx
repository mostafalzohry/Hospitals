import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Hospital } from "../types/hospital";
import OccupancyStatusBar from "./OccupancyStatusBar";
import BedIcon from "@mui/icons-material/Bed";
import CareTypeRow from "./CareTypeRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

interface HospitalDetailProps {
  hospital: Hospital;
}

const HospitalDetail: React.FC<HospitalDetailProps> = ({ hospital }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        backgroundColor: "#1A1F2C",
        borderRadius: 1,
        overflow: "hidden",
        height: "120px",
        mb: 2,
      }}
    >
      <Box
        sx={{
          width: "100px",
          backgroundColor: hospital.color,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.2)",
            mb: 1,
          }}
        >
          <LocalHospitalIcon sx={{ color: "white", fontSize: "24px" }} />
        </Box>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          sx={{ color: "white", textAlign: "center", fontSize: "0.8rem" }}
        >
          {hospital.name}
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          p: 1.5,
          backgroundColor: "#272B35",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flex: 2,
            pr: 1.5,
          }}
        >
          <Box sx={{ mb: 1 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}
            >
              <Typography variant="body2" sx={{ color: "white" }}>
                Occupancy Rate
              </Typography>
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ color: "white" }}
              >
                {hospital.rate}%
              </Typography>
            </Box>
            <OccupancyStatusBar rate={hospital.rate} color={hospital.color} />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 1,
            }}
          >
            <Paper
              sx={{
                p: 0.5,
                backgroundColor: "rgba(0,0,0,0.3)",
                flex: 1,
                display: "flex",
                alignItems: "center",
                borderRadius: 1,
              }}
            >
              <BedIcon sx={{ color: "white", mr: 0.5, fontSize: 16 }} />
              <Typography variant="caption" sx={{ color: "white", mr: 0.5 }}>
                Total
              </Typography>
              <Typography
                variant="caption"
                fontWeight="bold"
                sx={{ color: "white" }}
              >
                {hospital.total}
              </Typography>
            </Paper>

            <Paper
              sx={{
                p: 0.5,
                backgroundColor: "rgba(0,0,0,0.3)",
                flex: 1,
                display: "flex",
                alignItems: "center",
                borderRadius: 1,
              }}
            >
              <BedIcon sx={{ color: "white", mr: 0.5, fontSize: 16 }} />
              <Typography variant="caption" sx={{ color: "white", mr: 0.5 }}>
                Vacant
              </Typography>
              <Typography
                variant="caption"
                fontWeight="bold"
                sx={{ color: "white" }}
              >
                {hospital.vacant}
              </Typography>
            </Paper>

            <Paper
              sx={{
                p: 0.5,
                backgroundColor: "rgba(0,0,0,0.3)",
                flex: 1,
                display: "flex",
                alignItems: "center",
                borderRadius: 1,
              }}
            >
              <BedIcon sx={{ color: "white", mr: 0.5, fontSize: 16 }} />
              <Typography variant="caption" sx={{ color: "white", mr: 0.5 }}>
                Occ.
              </Typography>
              <Typography
                variant="caption"
                fontWeight="bold"
                sx={{ color: "white" }}
              >
                {hospital.occupied}
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 3,
            display: "flex",
            flexDirection: "row",
            gap: 1,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {hospital.careTypes.map((careType, index) => (
            <CareTypeRow key={index} careType={careType} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HospitalDetail;
