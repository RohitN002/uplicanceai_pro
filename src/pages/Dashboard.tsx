// import { Box, Grid, Typography, Paper } from "@mui/material";
// import Counter from "../components/Counter";
// import UserForm from "../components/UserForm";
// import RichTextEditor from "../components/RichTextEditor";
// import UserChart from "../components/UserChart"; // Import chart component

// const Dashboard = () => {
//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Dashboard 📊
//       </Typography>

//       <Grid container spacing={3}>
//         {/* Counter Component */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h6">Counter</Typography>
//             <Counter />
//           </Paper>
//         </Grid>

//         {/* User Form Component */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h6">User Data Form</Typography>
//             <UserForm />
//           </Paper>
//         </Grid>

//         {/* Rich Text Editor */}
//         <Grid item xs={12}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h6">Rich Text Editor</Typography>
//             <RichTextEditor />
//           </Paper>
//         </Grid>

//         {/* User Activity Chart */}
//         <Grid item xs={12}>
//           <UserChart />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;
import { Box, Grid, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import RichTextEditor from "../components/RichTextEditor";
import UserChart from "../components/UserChart";
import AnimatedForm from "../components/CurveComponent";

const Dashboard = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

  return (
    <animated.div style={fadeIn}>
      <Box sx={{ p: 4 }}>
        {/* <Typography variant="h4" gutterBottom>
          Dashboard 📊
        </Typography> */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Counter />
          </Grid>
          <Grid item xs={12} md={6}>
            <RichTextEditor />
          </Grid>
          <Grid item xs={12}>
            <UserForm />
          </Grid>
          <Grid item xs={12}>
            {/* <UserChart /> */}
            <AnimatedForm />
          </Grid>
        </Grid>
      </Box>
    </animated.div>
  );
};

export default Dashboard;
