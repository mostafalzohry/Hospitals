import React from "react";
import Grid from "@mui/material/Grid";
import { Hospital } from "../types/hospital";
import HospitalDetail from "./HospitalDetail";

interface HospitalListProps {
  hospitals: Hospital[];
}

const HospitalList: React.FC<HospitalListProps> = ({ hospitals }) => {
  return (
    <Grid container spacing={3}>
      {hospitals.map((hospital) => (
        <Grid item xs={12} md={6} lg={6} key={hospital.id}>
          <HospitalDetail hospital={hospital} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HospitalList;
