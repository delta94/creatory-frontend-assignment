import { AUTH_API } from "../constants/APIUri";
import { POST } from "./Clients";

export const login = async (body) =>
  POST({
    url: AUTH_API.SIGN_IN,
    body,
  });

export default {
  login,
};
