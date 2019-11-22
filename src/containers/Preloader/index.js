import "./styles.scss";
import {
    dashedCircle1,
    dashedCircle2,
    dashedCircle3,
    dashedCircle4,
    decor1,
    decor2,
    decor3,
    logo,
    pointer,
    radialGradient
} from './svg';

export default class Preloader {

    constructor () {

    }

    render () {
        const pointerText = `
            <div class="com-preloader__pointer-text">
                <div class="com-preloader__pointer-text__label">ЗАГРУЗКА............</div>
                <div class="com-preloader__pointer-text__value">55%</div>
            </div>
        `;

        return `
            <div class="com-preloader">
                <div class="com-preloader__wrapper">
                    <div class="com-preloader__circles">
                        ${dashedCircle1}
                        ${dashedCircle2}
                        ${dashedCircle3}
                        ${dashedCircle4}
                    </div>
                    
                    <div class="com-preloader__logo">
                        ${logo}
                    </div>
                    
                    <div class="com-preloader__pointer">
                        ${pointer}
                        ${decor2}
                        ${pointerText}
                    </div>
                    
                    <div class="com-preloader__glow">
                        ${radialGradient}
                    </div>
                    
                    <div class="com-preloader__decor-top">${decor1}</div>
                    <div class="com-preloader__decor-bottom">${decor1}</div>
                </div>
                
                <div class="com-preloader__decor-wave">
                    <img src="${decor3}" alt="">
                </div>
            </div>
        `;
    }
}
