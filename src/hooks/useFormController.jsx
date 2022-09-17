import { useFormik } from "formik";
import * as Yup from "yup";

const useFormController = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      password: "",
      repeatPassword: "",
    },

    onSubmit: (values) => {},

    validationSchema: Yup.object({
      name: Yup.string("please enter string")
        .max(15, "cant be more than 15 characters")
        .required("Reqired Field"),
      number: Yup.number("must be a number")
        .min(11, "must be 11 characters")
        .max(11, "must be 11 characters")
        .required("Reqired Field"),
      email: Yup.string("please enter string").required("Reqired Field"),
      password: Yup.string("please enter string")
        .min(6, "must be at least 6 characters")
        .required("Reqired Field"),
      repeatPassword: Yup.string("please enter string")
        .min(6, "must be at least 6 characters")
        .required("Reqired Field"),
    }),
  });

  const exports = {
    formik,
  };
  return exports;
};

export default useFormController;
