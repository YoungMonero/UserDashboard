import { useNavigate } from "react-router";
import { useUser } from "../context/user-context";

function Profile() {
  const { user } = useUser();
  const navigate = useNavigate();

  const fullName = `${user.firstname} ${user.lastname}`;

  return (
    <div className="page-wrapper">
      <div className="card">
        <div className="header">
          <div className="header-dot" />
          <span className="header-title">My Dashboard</span>
        </div>

        <div className="profile-body">
          <div className="profile-avatar-section">
            {user.profilePicture ? (
              <img
                src={user.profilePicture}
                alt="Profile"
                className="profile-picture-display"
              />
            ) : (
              <div className="avatar-large-placeholder">
                {user.firstname?.[0]?.toUpperCase() || "👤"}
              </div>
            )}
            <p className="profile-name">{fullName}</p>
            <p className="profile-email-badge">{user.email}</p>
          </div>

          <div className="info">
            <div className="info-row">
              <span className="info-key">First Name</span>
              <span className="info-value">{user.firstname}</span>
            </div>
            <div className="info-row">
              <span className="info-key">Last Name</span>
              <span className="info-value">{user.lastname}</span>
            </div>
            <div className="info-row">
              <span className="info-key">Email</span>
              <span className="info-value">{user.email}</span>
            </div>
          </div>

          <button className="btn-edit" onClick={() => navigate("/update")}>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
