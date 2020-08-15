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

export async function createUser({ name, email, password }) {
  const body = JSON.stringify({ name, email, password });

  const options = {
    ...DEFAULT_OPTIONS,
    method: "POST",
    body,
  };

  try {
    const restult = await fetch(`${API_URL}/signup`, options);
    const user = await restult.json();

    return user;
  } catch (e) {
    console.error(e);
  }
}

export async function createProject({ title }) {
  const token = localStorage.getItem("token");
  const body = JSON.stringify({ title });

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
    const restult = await fetch(`${API_URL}/projects`, options);
    const project = await restult.json();

    return project;
  } catch (e) {
    console.error(e);
  }
}

export const createTodo = (projectId) => async ({ title }) => {
  const token = localStorage.getItem("token");
  const body = JSON.stringify({ title });

  const options = {
    ...DEFAULT_OPTIONS,
    method: "POST",
    headers: {
      ...DEFAULT_OPTIONS.headers,
      Authorization: `Bearer ${token}`,
    },
    body,
  };

  console.log(options);

  try {
    const restult = await fetch(
      `${API_URL}/projects/${projectId}/todos`,
      options
    );
    const todo = await restult.json();

    return todo;
  } catch (e) {
    console.error(e);
  }
};
