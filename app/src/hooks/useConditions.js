import { useQuery } from "react-query";
import { API_URL, DEFAULT_OPTIONS } from "../utils/constants";

const getConditions = async () => {
  try {
    const token = localStorage.getItem("token");

    const options = {
      ...DEFAULT_OPTIONS,
      headers: {
        ...DEFAULT_OPTIONS.headers,
        Authorization: `Bearer ${token}`,
      },
    };

    const result = await fetch(`${API_URL}/conditions`, options);
    const data = await result.json();

    return data;
  } catch (e) {
    console.error(e);
  }
};

export function useConditions() {
  return useQuery("conditions", getConditions);
}
