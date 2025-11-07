import { useNavigate } from "react-router";
import Banner from "./Banner";
import { useUser } from "../context/user-context";

function Profile() {
  const {user: accountInfo} = useUser();

  const navigate = useNavigate();

  const update = () => {
    navigate("/update");
  };
  return (
    <>
      <Banner />
      <div className="info">
        <p>
          <strong>First Name</strong>: {accountInfo.firstname}
        </p>
        <p>
          <strong>Last Name</strong>: {accountInfo.lastname}
        </p>
        <p>
          <strong>Email</strong>: {accountInfo.email}
        </p>
        <p>
          <strong>Phone Number</strong>: {accountInfo.telephone}
        </p>
        <button className="edit-info" onClick={update}>
          Update info
        </button>
      </div>
    </>
  );
}

export default Profile;
