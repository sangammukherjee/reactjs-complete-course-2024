import { useContext } from "react";
import { AuthContext } from "../../context";

function ProfilePage() {
  const { user, handleLogout } = useContext(AuthContext);

  console.log(user);

  return (
    <div>
      <h3>{user?.displayName}</h3>
      <p>{user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProfilePage;
