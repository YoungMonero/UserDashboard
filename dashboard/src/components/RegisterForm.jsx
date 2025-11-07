import { useNavigate } from "react-router";
import ProfileForm from "./ProfileForm";
import { InitialUser } from "../constants";
import { useUser } from "../context/user-context";

function RegisterForm() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const onSubmit = (values) => {
    setUser(values);
    navigate("/display");
  };

  return <ProfileForm initialValues={InitialUser} onSubmit={onSubmit} />;
}

export default RegisterForm;
