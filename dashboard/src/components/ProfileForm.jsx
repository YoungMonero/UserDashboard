import { useFormik } from "formik";
import PropTypes from "prop-types";
import { ProfileSchema } from "../schemas/profile-schema";

const FieldError = ({ error }) => {
  return error ? (
    <div className="error-container">
      <p className="form_error">{error}</p>
    </div>
  ) : null;
};

export default function ProfileForm({
  initialValues,
  onSubmit,
  title = "Create your profile",
  subtitle = "Fill in your details to get started.",
}) {
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: ProfileSchema,
    onSubmit: (values, actions) => {
      const trimmed = {
        ...values,
        firstname: values.firstname.trim(),
        lastname: values.lastname.trim(),
        email: values.email.trim(),
      };
      onSubmit(trimmed);
      actions.resetForm();
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setFieldValue("profilePicture", reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="page-wrapper">
      <div className="card">
        <Banner />
        <div className="form-body">
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">{subtitle}</p>

          <form onSubmit={handleSubmit}>
            {/* Profile Picture */}
            <div className="profile-picture-upload">
              <label>Profile Picture</label>
              <div className="avatar-row">
                {values.profilePicture ? (
                  <img
                    src={values.profilePicture}
                    alt="Preview"
                    className="profile-picture-preview"
                  />
                ) : (
                  <div className="avatar-placeholder">👤</div>
                )}
                <label htmlFor="profilePicture" className="file-input-label">
                  📷 Choose photo
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleImageChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={values.firstname}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="e.g. Alex"
              />
              {touched.firstname && <FieldError error={errors?.firstname} />}
            </div>

            <div className="field">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={values.lastname}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="e.g. Johnson"
              />
              {touched.lastname && <FieldError error={errors?.lastname} />}
            </div>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="e.g. alex@example.com"
              />
              {touched.email && <FieldError error={errors?.email} />}
            </div>

            <button type="submit" className="btn-primary">
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Local Banner used inside form card
function Banner() {
  return (
    <div className="header">
      <div className="header-dot" />
      <span className="header-title">My Dashboard</span>
    </div>
  );
}

ProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  initialValues: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profilePicture: PropTypes.string,
  }),
};
