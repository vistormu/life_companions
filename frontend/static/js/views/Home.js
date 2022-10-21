import AbstractView from "./AbstractView.js";
import Card from "../elements/Card.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");

        this.cardWeek1 = new Card("sea.png", "Semana 1", "Miradas furtivas", false)
        this.cardWeek2 = new Card("sea.png", "Semana 2", "Miradas furtivas", true)
        this.cardWeek3 = new Card("sea.png", "Semana 3", "Miradas furtivas", true)
        this.cardWeek4 = new Card("sea.png", "Semana 4", "Miradas furtivas", true)
        this.cardWeek5 = new Card("sea.png", "Semana 5", "Miradas furtivas", true)
    }

    async getHtml() {
        return `
            <p>Aquí una descripción relativamente extensa de lo que va este regalo, con unas palabras bonitas noseke, que le camino nosekuanto, que hay que rememorar todo el camino y eso</p>
            <div class="container">
                <a href=/first-week data-link>${this.cardWeek1.getHtml()}</a>
                ${this.cardWeek2.getHtml()}
                ${this.cardWeek3.getHtml()}
                ${this.cardWeek4.getHtml()}
                ${this.cardWeek5.getHtml()}
            </div>
        `;
    }
}