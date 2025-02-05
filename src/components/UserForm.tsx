import { useEffect } from "react";
import { Button, TextField, Box, Typography, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setUser, saveUser } from "../redux/userSlice";
import { RootState } from "../redux/store";

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state?.user);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (user.hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes!";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [user.hasUnsavedChanges]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUser({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(saveUser());
    alert("User data saved!");
  };

  return (
    <Box
      sx={{
        padding: "30px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            borderRadius: "15px",
            border: "1px solid #ccc",
            padding: "15px",
          }}
        >
          <Typography variant="h6">User ID: {user.id}</Typography>
          <TextField
            label="Name"
            name="name"
            fullWidth
            value={user.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            fullWidth
            value={user.address}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            value={user.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            fullWidth
            value={user.phone}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Save
          </Button>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            borderRadius: "15px",
            border: "1px solid #ccc",
            padding: "15px",
          }}
        >
          <Typography variant="h6">User ID: {user.id}</Typography>
          <TextField
            label="Name"
            name="name"
            fullWidth
            value={user.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            fullWidth
            value={user.address}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            value={user.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            fullWidth
            value={user.phone}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserForm;
/*  */
