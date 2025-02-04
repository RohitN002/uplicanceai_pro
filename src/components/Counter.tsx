import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";

const Counter = () => {
  const [count, setCount] = useState(0);

  const backgroundSpring = useSpring({
    backgroundColor: `rgba(0, 0, 255, ${count * 0.1})`, // Linear color transition
  });

  return (
    <animated.div
      style={{ ...backgroundSpring, padding: "20px", textAlign: "center" }}
    >
      <Typography variant="h4">Counter: {count}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
      <Button variant="contained" color="error" onClick={() => setCount(0)}>
        Reset
      </Button>
    </animated.div>
  );
};

export default Counter;
