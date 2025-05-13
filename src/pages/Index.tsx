import {
  Box,
  Typography,
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { useHospitalData } from "../hooks/useHospitalData";
import HospitalList from "../components/HospitalList";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1A1F2C",
      paper: "#272B35",
    },
    primary: {
      main: "#25a55f",
    },
    secondary: {
      main: "#eb442c",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: "hidden",
        },
      },
    },
  },
});

const Index = () => {
  const { data, loading, error } = useHospitalData();

  if (loading) {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth={false} disableGutters sx={{ height: "100vh" }}>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                animation: "spin 1s linear infinite",
                mb: 2,
              }}
            >
              <LocalHospitalIcon sx={{ fontSize: 40 }} />
            </Box>
            <Typography variant="h6">Loading hospital data...</Typography>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }

  if (error || !data) {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth={false} disableGutters sx={{ height: "100vh" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              sx={{
                p: 3,
                textAlign: "center",
                maxWidth: 400,
                backgroundColor: "#272B35",
                borderRadius: 2,
              }}
            >
              <Box sx={{ color: "error.main", mb: 2 }}>
                <LocalHospitalIcon sx={{ fontSize: 40 }} />
              </Box>
              <Typography variant="h6">Error Loading Data</Typography>
              <Typography color="text.secondary">
                {error || "Unable to load hospital data"}
              </Typography>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            p: 2,
            backgroundColor: "#272B35",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography variant="h6">Hospital Dashboard</Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            p: 2,
            backgroundColor: "#1A1F2C",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <HospitalList hospitals={data.hospitals} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Index;
