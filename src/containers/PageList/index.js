import "./styles.scss";

export default class PageList {

    constructor () {

    }

    render () {
        return `
            <div class="container">
                <ul>
                    <li><a href="?page=preloader">Прелоадер</a></li>
                </ul>
            </div>
        `;
    }
}
