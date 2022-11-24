import http from '../../http.common';

const getUserAccountInfo = async (id) => {
    let credential = JSON.parse(localStorage.getItem("credential"));
    var headers = {
        "Authorization": credential.access_token ? "Bearer " + credential.access_token : ""
    }
    http.post("/account/" + id, {}, {
        headers: headers
    }).then((res) => {
        if (res.data.success) {
            localStorage.setItem("currentUser", JSON.stringify(res.data));
        }
        else {
            console.log(res.data.message);
        }
        
    });
}

const AccountService = {
    getUserAccountInfo
}

export default AccountService;