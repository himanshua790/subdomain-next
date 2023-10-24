"use client";
const fetchProfile = async (domain) => {
  const response = await fetch(`/api/${domain}`);
  const resp = await response.json();
  return resp;
};

import ProfileCard from "../../components/ProfileCard";
import React, { Suspense } from "react";
import useSWR from "swr";

export default function Page(props) {
  const domain = props?.params?.domain;

  const {
    data: profile,
    error,
    isLoading,
  } = useSWR("profile", () => fetchProfile(props?.params?.domain));
  const style = profile?.styles ? {} : { backgroundColor: "red" };
  return (
    <div>
      {isLoading && <p>....Loading!</p>}

      <Suspense fallback={<div>Loading...</div>}>
        <ProfileCard profile={profile} />
      </Suspense>
    </div>
  );
}
