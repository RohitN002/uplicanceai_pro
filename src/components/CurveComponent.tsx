import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function AnimatedForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    phone: "",
  });

  // Smooth Bezier-like Animation
  const springProps = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 120, friction: 14 },
  });

  const handleToggle = () => setIsOpen(!isOpen);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card
      sx={{ maxWidth: 500, mx: "auto", p: 2, boxShadow: 4, borderRadius: 3 }}
    >
      <Button
        onClick={handleToggle}
        variant="contained"
        fullWidth
        sx={{ mb: 2 }}
      >
        {isOpen ? "Close Form" : "Open Form"}
      </Button>

      {isOpen && (
        <animated.div style={springProps}>
          <CardContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }} // Bezier Curve
            >
              <Typography variant="h6" gutterBottom>
                User Details
              </Typography>
              {["address", "email", "phone"].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className="mb-3"
                >
                  <TextField
                    fullWidth
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    variant="outlined"
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    sx={{ mb: 1 }}
                  />
                  <Button variant="contained" color="success" fullWidth>
                    Save
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </animated.div>
      )}
    </Card>
  );
}
