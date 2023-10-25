const fetchProfile = async (domain) => {
  const response = await fetch(`/api/${domain}`);
  if (!response.ok) {
    // If the response is not ok, throw an error
    throw new Error("Failed to fetch profile data!");
  }
  const resp = await response.json();
  return resp;
};

import useSWR from "swr";
function useFetchProfile(domain) {
  return useSWR(["profile", domain], () => fetchProfile(domain));
}
export { useFetchProfile };
