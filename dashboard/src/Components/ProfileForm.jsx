import { useFormik } from "formik";
import PropTypes from "prop-types";
import { ProfileSchema } from "../schemas/profile-schema";

const Error = ({ error }) => {
    return error? <div>
        <div className="error-container">
        <p className="form_error">{error}</p>
        </div>
        </div>: null;
}

export default function ProfileForm({ 
    initialValues, 
    onSubmit, 
    title="Welcome, sign Up" 
}) {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: ProfileSchema,
      onSubmit: (values, actions) => {
        console.log(values);
        onSubmit(values);
        actions.resetForm();
      },
    });

  console.log(errors);

  return (
    <>
      <h1 className="sign-up">{title}</h1>
      <div className="app">
        <form className="signup_form" onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            value={values.firstname}
            onBlur={handleBlur}
            onChange={handleChange}
          />
            <Error error={errors?.firstname} />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={values.lastname}
            onBlur={handleBlur}
            onChange={handleChange}
          />
            <Error error={errors?.lastname} />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
            <Error error={errors?.email} />

          <label htmlFor="telephone">Phone Number</label>
          <input
            type="tel"
            name="telephone"
            value={values.telephone}
            onBlur={handleBlur}
            onChange={handleChange}
          />
            <Error error={errors?.telephone} />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
         <Error error={errors?.password} />

          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            value={values.cpassword}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Error error={errors?.cpassword} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

ProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  initialValues: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    cpassword: PropTypes.string.isRequired,
  }),
};
