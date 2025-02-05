import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";
// import { green } from "@mui/material/colors";

// Custom cubic Bezier easing function
const cubicBezier =
  (p1x: number, p1y: number, p2x: number, p2y: number) => (t: number) => {
    const cX = 3 * p1x;
    const bX = 3 * (p2x - p1x) - cX;
    const aX = 1 - cX - bX;
    const cY = 3 * p1y;
    const bY = 3 * (p2y - p1y) - cY;
    const aY = 1 - cY - bY;

    const calcBezier = (t: number, a: number, b: number, c: number) =>
      ((a * t + b) * t + c) * t;

    const x = calcBezier(t, aX, bX, cX);
    console.log(x);
    const y = calcBezier(t, aY, bY, cY);
    return y;
  };

// Example Bezier control points (feel free to adjust)
const easingFunction = cubicBezier(0.42, 0.0, 0.58, 1.0);

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  // Bézier curve-inspired background height calculation
  const backgroundSpring = useSpring({
    to: {
      height: `${Math.min(count * 10, 100)}%`,
      backgroundColor: `rgba(0, 123, 255, ${Math.min(count * 0.1, 0.8)})`,
    },
    config: {
      duration: 500, // Duration for animation
      easing: easingFunction, // Custom Bezier curve easing
    },
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "15px",
        border: "1px solid #ccc",
      }}
    >
      {/* Animated Background Layer */}
      <animated.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          ...backgroundSpring,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          zIndex: 10,
          textAlign: "center",
          color: "white",
          position: "relative",
        }}
      >
        <Typography variant="h4" gutterBottom style={{ color: "gray" }}>
          Counter: {count}
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </Button>
          <Button variant="contained" color="error" onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCount(Math.max(0, count - 1))}
          >
            Decrement
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;
