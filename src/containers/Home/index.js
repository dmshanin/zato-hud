import "./styles.scss";
import {
    decor1,
    decor2,
    decor3,
    decor4,
    decor5
} from "./svg"

export default class Home {

    constructor () {

    }

    render () {
        return `
            <div class="hud">
                <div class="hud__bg">
                    <div class="hud__bg__video">Фоновое видео</div>
                    <div class="hud__bg__decor-top"></div>
                    <div class="hud__bg__decor-bottom"></div>
                </div>
                
                <div class="hud__header">
                    <div class="hud__header__decor__container">
                        <div class="hud__header__decor__row-1 hud__header__decor__row-center">
                            <div class="hud__header__decor__item">${decor1}</div>
                        </div>
                        <div class="hud__header__decor__row-2 hud__header__decor__row-space-between">
                            <div class="hud__header__decor__item">${decor4}</div>
                            <div class="hud__header__decor__item hud__header__decor__item-reverse">${decor4}</div>
                        </div>
                        <div class="hud__header__decor__row-3 hud__header__decor__row-space-between">
                            <div class="hud__header__decor__item">${decor3}</div>
                            <div class="hud__header__decor__item hud__header__decor__item-reverse">${decor3}</div>
                        </div>
                        <div class="hud__header__decor__row-4 hud__header__decor__row-space-between">
                            <div class="hud__header__decor__item">${decor5}</div>
                            <div class="hud__header__decor__item hud__header__decor__item-reverse">${decor5}</div>
                        </div>
                        <div class="hud__header__decor__row-5 hud__header__decor__row-center">
                            <div class="hud__header__decor__item-9">${decor2}</div>
                        </div>
                    </div>
                </div>
                
                <div class="hud__footer">
                    <div class="hud__footer__decor__container">
                        <div class="hud__footer__decor__row-1 hud__footer__decor__row-center">
                            <div class="hud__footer__decor__item">${decor1}</div>
                        </div>
                        <div class="hud__footer__decor__row-2 hud__footer__decor__row-space-between">
                            <div class="hud__footer__decor__item">${decor4}</div>
                            <div class="hud__footer__decor__item hud__footer__decor__item-reverse">${decor4}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
