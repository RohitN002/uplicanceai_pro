import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h3" gutterBottom>
        Welcome to the React Assignment 🚀
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Explore features like Counter, User Forms, and Rich Text Editors.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/dashboard")}
        sx={{ mt: 3 }}
      >
        Go to Dashboard
      </Button>
    </Box>
  );
};

export default Home;
