import "./App.css";
import useFormController from "./hooks/useFormController";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
        <TextField
          type="text"
          label="Your Name"
          {...formik.getFieldProps("name")}
          helperText={
            formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null
          }
        />

        <TextField
          type="number"
          label="Your Number"
          {...formik.getFieldProps("number")}
          helperText={
            formik.touched.number && formik.errors.number ? (
              <div>{formik.errors.number}</div>
            ) : null
          }
        />

        <TextField
          label="Your Email"
          type="email"
          variant="filled"
          {...formik.getFieldProps("email")}
          helperText={
            formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null
          }
        />

        <TextField
          label="Password"
          type="password"
          variant="standard"
          {...formik.getFieldProps("password")}
          helperText={
            formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null
          }
        />

        <TextField value="submit" type="submit" />
      </Box>
    </>
  );
}

export default App;
