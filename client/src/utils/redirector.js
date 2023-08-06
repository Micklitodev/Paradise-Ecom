import Auth from "./auth";

class Redirector {
  checkTokens() {
    const token = localStorage.getItem("id_token");
    const agree = localStorage.getItem("agree_token");
    Auth.isTokenExpired(token);
    Auth.isAgreementValid(agree);
  }
}

export default new Redirector();
