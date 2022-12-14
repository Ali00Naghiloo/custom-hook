import "./App.css";
import useFormController from "./hooks/useFormController";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

function App() {
  const { formik } = useFormController();

  return (
    <>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        component="form"
        className="App"
        onSubmit={formik.handleSubmit}
      >
        {/* My Header Text */}
        <h3>Wellcome!</h3>
        <h6>Register Your Acount</h6>

        {/* My Name Input */}
        <TextField
          type="text"
          label="User Name"
          {...formik.getFieldProps("name")}
          helperText={
            formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null
          }
          error={
            formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null
          }
        />

        {/* My Email Input */}
        <TextField
          label="Your Email"
          type="email"
          {...formik.getFieldProps("email")}
          helperText={
            formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null
          }
          error={
            formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null
          }
        />

        {/* My Password Input */}
        <TextField
          label="Password"
          type="password"
          {...formik.getFieldProps("password")}
          helperText={
            formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null
          }
          error={
            formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null
          }
        />

        {/* My RepeatPassword Input */}
        {/* <TextField
          label="Repeat Password"
          type="password"
          {...formik.getFieldProps("repeatPassword")}
          helperText={
            formik.touched.repeatPassword && formik.errors.repeatPassword ? (
              <div>{formik.errors.repeatPassword}</div>
            ) : null
          }
          error={
            formik.touched.repeatPassword && formik.errors.repeatPassword ? (
              <div>{formik.errors.repeatPassword}</div>
            ) : null
          }
        /> */}

        <TextField value="submit" type="submit" />
      </Box>
    </>
  );
}

export default App;
