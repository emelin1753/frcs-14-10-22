import { tokens } from "@/store/backend";

const lsToken = "token";

export function setToken(token) {
  localStorage.setItem(lsToken, token);
}

export function getToken() {
  return localStorage.getItem(lsToken);
}

export function deleteToken() {
  localStorage.removeItem(lsToken);
}

export function validToken() {
  return tokens[getToken()];
}
