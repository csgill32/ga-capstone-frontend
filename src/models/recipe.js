const URL = `https://recipebookcapstone-backend.herokuapp.com/api/v1/recipes`;

class RecipeModel {
    static all = () => {
        return fetch(URL, { credentials: "include" }).then((response) => response.json());
    };

    static show = (recipeId) => {
        return fetch(`${URL}/${recipeId}`, { credentials: "include" }).then((response) => response.json());
    };

    static create = (recipeData) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(recipeData),
        }).then((response) => response.json());
    };

    static update = ({ recipe, ...body }) => {
        console.log(recipe, body)
        return fetch(`${URL}/${recipe._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(body),
        })
    }

    static delete = (recipeId) => {
        return fetch(`${URL}/${recipeId}`, {
            method: "DELETE",
            credentials: "include",
        }).then((response) => response.json());
    };
}

export default RecipeModel;