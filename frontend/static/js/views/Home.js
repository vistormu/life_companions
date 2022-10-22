import AbstractView from "./AbstractView.js";
import Card from "../elements/Card.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");

        this.chaperOneCard = new Card("big_boy.png", "Capítulo 1", "Descripción del capítulo 1", false)
        this.cardWeek2 = new Card("red_boy.png", "Capítulo 2", "Descripción del capítulo 2", false)
        this.cardWeek3 = new Card("yellow_boy.png", "Capítulo 3", "Descripción del capítulo 3", false)
        this.cardWeek4 = new Card("big_boy.png", "Capítulo 4", "Descripción del capítulo 4", true)
        this.cardWeek5 = new Card("big_boy.png", "Capítulo 5", "Descripción del capítulo 5", true)
    }

    async getHtml() {
        return `
            <div class="content">
                <p>Aquí una descripción relativamente extensa de lo que va este regalo, con unas palabras bonitas noseke, que le camino nosekuanto, que hay que rememorar todo el camino y eso</p>
            </div>
            <div class="container">
                <a href=/first-week data-link>${this.chaperOneCard.getHtml()}</a>
                ${this.cardWeek2.getHtml()}
                ${this.cardWeek3.getHtml()}
                ${this.cardWeek4.getHtml()}
                ${this.cardWeek5.getHtml()}
            </div>
        `;
    }
}