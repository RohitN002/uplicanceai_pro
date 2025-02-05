import { Button, Box, Typography, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { loginWithGoogle } from "../redux/authSlice";
import { RootState } from "../redux/store";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
// GoogleLogin
const Login = () => {
  const dispatch = useDispatch();
  const naviagate = useNavigate();
  //   const { loading, error } = useSelector((state: RootState) => state.auth);
  const handleLogout = () => {
    googleLogout();
  };
  return (
    <Box textAlign="center" mt={5}>
      {/* <Typography variant="h4" gutterBottom>
        Login to Dashboard 🔐
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Button
        variant="contained"
        color="primary"
        // onClick={() => dispatch(loginWithGoogle())}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Sign in with Google"}
      </Button> */}
      <GoogleLogin
        onSuccess={(credintialResonse: any) => {
          console.log("login details", credintialResonse);
          console.log(jwtDecode(credintialResonse?.credential));
          naviagate("/dashboard");
        }}
        onError={() => {
          console.log("error");
        }}
        auto_select={true}
      />
    </Box>
  );
};

export default Login;
