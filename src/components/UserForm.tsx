import { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: `USR-${Math.random().toString(36).substring(2, 8)}`,
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(setUser(formData));
    localStorage.setItem("user", JSON.stringify(formData));
  };

  return (
    <Box>
      <TextField label="Name" name="name" fullWidth onChange={handleChange} />
      <TextField
        label="Address"
        name="address"
        fullWidth
        onChange={handleChange}
      />
      <TextField label="Email" name="email" fullWidth onChange={handleChange} />
      <TextField label="Phone" name="phone" fullWidth onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
};

export default UserForm;
