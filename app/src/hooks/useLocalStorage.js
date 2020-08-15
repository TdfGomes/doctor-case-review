export function useLocalStorage() {
  try {
    const token = localStorage.getItem("token");
    const state = JSON.parse(localStorage.getItem("state"));
    return [token, state];
  } catch (error) {
    console.log(error);
    return false;
  }
}
