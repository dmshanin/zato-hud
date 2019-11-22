import "./styles.scss";

export default class PageList {

    constructor () {

    }

    render () {
        return `
            <div class="toc">
               <div class="toc__container">
                    <ul>
                        <li><a href="?page=preloader">Прелоадер</a></li>
                        <li><a href="?page=homepage">Главная страница</a></li>
                    </ul>
                </div>
            </div>
        `;
    }
}
