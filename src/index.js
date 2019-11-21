import "./theme/styles.scss";
import { findGetParameter } from "./instruments/helpers"
import { Preloader } from "./containers";

const appContainer = document.getElementById("app");
const pageName = findGetParameter('page');

const pages = {
    preloader: new Preloader()
};

appContainer.innerHTML = pages[pageName].render();
appContainer.setAttribute('data-page', pageName);
