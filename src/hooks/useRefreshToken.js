import axios from "api/axios";
import { authUpdateUser } from "store/auth/auth-slice";
import { getToken, saveToken } from "utils/auth";

export default function useRefreshToken() {
  async function refresh() {
    const { refresh_token } = getToken();
    if (!refresh_token) return null;
    const response = await axios.post("/token", {
      "Content-Type": "application/json",
      refreshToken: refresh_token,
    });
    saveToken(response.data.accessToken, response.data.refreshToken);
    authUpdateUser((prev) => ({
      ...prev,
      accessToken: response?.data?.accessToken,
      // refreshToken: refresh_token,
    }));
    return response?.data?.accessToken || "";
  }
  return refresh;
}
