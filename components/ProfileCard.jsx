import React from "react";

const ProfileCard = async ({ profile }) => {
  return (
    <div style={profile?.styles?.ProfileCard || {}}>
      <h2>{profile?.name}</h2>
      <p>{profile?.bio}</p>
    </div>
  );
};

export default ProfileCard;
