import get from "./components/getElement.js";
import getUser from "./components/fetchUser";
import displayUser from "./components/displayUser";



const btn = get(".btn");

const showUser = async () => {

    const person = await getUser();
    displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);