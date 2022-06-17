import GLocalStorage from "../Global/GLocalStorage";


const AuthHelper = {
  getUserRoleFromAuth: () => {
    var role = "";
    if (GLocalStorage.IsExists("user")) {
      const data = JSON.parse(GLocalStorage.Get("user"));
      if (data) {
        role = data.userType;
      }
    }
    return role;
  },

  setAdminToken: () => {
    GLocalStorage.Add("bottle-bitterground", "pXVCJ9.eyJfaWQiOiI2MWU3ZjdjMjE");
  },

  getAdminToken: () => {
    var role = false;
    if (GLocalStorage.IsExists("bottle-bitterground")) {
      const data = JSON.parse(GLocalStorage.Get("bottle-bitterground"));
      if (data && data === "pXVCJ9.eyJfaWQiOiI2MWU3ZjdjMjE") {
        role = true;
      }
    }
    return role;
  },
};

export default AuthHelper;
