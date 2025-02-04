import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Typography, Paper } from "@mui/material";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UserChart = () => {
  const data = {
    labels: ["User A", "User B", "User C", "User D"],
    datasets: [
      {
        label: "Activity Level",
        data: [20, 35, 50, 70],
        backgroundColor: ["#3f51b5", "#f50057", "#ff9800", "#4caf50"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "User Activity Chart",
      },
    },
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6">User Trends</Typography>
      <Box sx={{ height: 300 }}>
        <Bar data={data} options={options} />
      </Box>
    </Paper>
  );
};

export default UserChart;
