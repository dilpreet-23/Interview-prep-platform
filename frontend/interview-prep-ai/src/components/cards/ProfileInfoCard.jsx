import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom';

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  console.log("User Data:", user);
  console.log("Profile URL:", user?.profileImageUrl);

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
    <div className="flex items-center">
      <img
         src={user?.profileImageUrl}
         alt="profile"
         onLoad={() => console.log("IMAGE LOADED")}
         onError={(e) => {
         console.log("IMAGE FAILED");
         console.log(e.target.src);
         }}
      className="w-11 h-11 rounded-full mr-3 object-cover object-center bg-gray-300"
      />
    <div>
      <div 
      className="text-[15px] text-black font-bold leading-3"
      >
        {user.name || ""}
      </div>
      <button 
      className="text-amber-600 text-sm font-semibold cursor-pointer hover:underline"
      onClick={handleLogout}
      >
        Logout
      </button>
      </div>
      </div>
    )
  )
};

export default ProfileInfoCard
