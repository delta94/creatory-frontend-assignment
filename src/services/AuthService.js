import { AuthClient } from "../clients";

export const login = async ({ username, password }) => {
  const authRes = await AuthClient.login({ username, password });

  return authRes;
};

export default {
  login,
};
