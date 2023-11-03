import Image from "next/image";
import React from "react";

const ProfileCard = async ({ profile }) => {
  return (
    <div
      style={profile?.styles?.ProfileCard || {}}
      className="flex m-10 items-center justify-around"
    >
      <div>
        <h2>{profile?.name}</h2>
        <p>{profile?.bio}</p>
      </div>
      <Image
        src={profile?.profile_photo}
        alt="profile photo"
        width={200}
        height={200}
        loading="lazy"
      />
    </div>
  );
};

export default ProfileCard;
