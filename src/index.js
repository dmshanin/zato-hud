import "./theme/styles.scss";
import { findGetParameter } from "./instruments/helpers"
import { Preloader, PageList } from "./containers";

const appContainer = document.getElementById("app");
const pageName = findGetParameter('page') || 'pageList';

const pages = {
    pageList: new PageList(),
    preloader: new Preloader()
};

appContainer.innerHTML = pages[pageName].render();
appContainer.setAttribute('data-page', pageName);
