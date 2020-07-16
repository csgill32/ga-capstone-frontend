const URL = `http://localhost:3001/api/v1/auth`;

class UserModel {
    static all = () => {
        return fetch(URL).then((response) => response.json());
    };

    static show = (userId) => {
        return fetch(`${URL}/${userId}`).then((response) => response.json());
    };

    static create = (userData) => {
        return fetch(URL + "/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then((response) => response.json());
    };

    static login = (userData) => {
        return fetch(URL + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(userData),
        }).then((response) => response.json());
    };

    static logout = () => {
        return fetch(URL + "/logout", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        }).then((response) => response.json());
    };
}

export default UserModel;