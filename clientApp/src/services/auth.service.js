import http from '../http.common';

const register = (username, email, password) => {

}


const login = async (username, password) => {
    var user = {
        email: username,
        userName: username,
        password: password
    }
    http.post("/account/login", user )
    .then((res) => {
        localStorage.setItem("credential", JSON.stringify(res.data));
    });
}
const logout = () => {
    localStorage.setItem("credential", null);
}
const AuthService = {
    register,
    login,
    logout
}

export default AuthService;