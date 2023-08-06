import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  ensureAgree() {
    const token = this.getAgree();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("id_token");
        window.location.assign("/home");
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  isAgreementValid(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000 || token == null) {
        localStorage.removeItem("id_token");
        window.location.assign("/");
        return false;
      } else return true;
    } catch (err) {
      window.location.assign("/");
      return false;
    }
  }

  isAdmin() {
    try {
      const token = this.getToken();
      const decoded = decode(token);
      if (decoded.data.isAdmin === true) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  isVerified() {
    try {
      const token = this.getToken();
      const decoded = decode(token);
      if (decoded.data.isVerified === true) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  getAgree() {
    return localStorage.getItem("agree_token");
  }

  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/home");
  }

  agreement(agreeToken) {
    localStorage.setItem("agree_token", agreeToken);
    window.location.assign("/home");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/home");
  }
}

export default new AuthService();
