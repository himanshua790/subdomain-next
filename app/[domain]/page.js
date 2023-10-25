"use client";
import React, { Suspense } from "react";
import ProfileCard from "../../components/ProfileCard";
import { useFetchProfile } from "@/lib/hooks";

/**
 * The 'Page' component is responsible for displaying user profiles based on subdomains.
 * @param {Object} props - Props passed to the component.
 * @returns {JSX.Element} - The rendered 'Page' component.
 */
export default function Page(props) {
  // Use SWR (stale-while-revalidate) to fetch and manage profile data
  const { data: profile, error } = useFetchProfile(props?.params?.domain);
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {/* Display a loading message while fetching data */}
      {/* Consider using a skeleton instead of suspense text for a better user experience */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Render the 'ProfileCard' component with the fetched 'profile' data */}
        <ProfileCard profile={profile} />
      </Suspense>
    </div>
  );
}
