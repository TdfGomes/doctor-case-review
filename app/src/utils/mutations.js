import { API_URL, DEFAULT_OPTIONS } from "./constants";

export async function requestLogin({ email, password }) {
  const body = JSON.stringify({ username: email, password });

  const options = {
    ...DEFAULT_OPTIONS,
    method: "POST",
    body,
  };

  try {
    const restult = await fetch(`${API_URL}/login`, options);
    const data = await restult.json();

    if (data.error) return data;

    localStorage.setItem("token", data.token);

    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function createEhr({ conditionId, caseId }) {
  const token = localStorage.getItem("token");
  const body = JSON.stringify({ conditionId, caseId });

  const options = {
    ...DEFAULT_OPTIONS,
    method: "POST",
    headers: {
      ...DEFAULT_OPTIONS.headers,
      Authorization: `Bearer ${token}`,
    },
    body,
  };

  try {
    const restult = await fetch(`${API_URL}/ehr`, options);
    const ehr = await restult.json();

    if (ehr.error) return ehr;

    return ehr;
  } catch (e) {
    console.error(e);
  }
}
