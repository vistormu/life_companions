import AbstractView from "./AbstractView.js";
import Card from "../elements/Card.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");

        const chapterOneCard = new Card("green_blob.png", "Capítulo 1", "Descripción del capítulo 1", "/chapter-one", false);
        const chapterTwoCard = new Card("red_blob.png", "Capítulo 2", "Descripción del capítulo 2", "/chapter-two", false);
        const chapterThreeCard = new Card("yellow_blob.png", "Capítulo 3", "Descripción del capítulo 3", "/chapter-three", false);
        const chapterFourCard = new Card("pink_blob.png", "Capítulo 4", "Descripción del capítulo 4", "/chapter-four", false);
        const chapterFiveCard = new Card("blue_blob.png", "Capítulo 5", "Descripción del capítulo 5", "/chapter-five", false);

        const chapterCards = [chapterOneCard, chapterTwoCard, chapterThreeCard, chapterFourCard, chapterFiveCard];

        this.chaptersHtml = [];
        chapterCards.forEach((card) => {
            let cardHtml = ""
            if (card.locked) {
                cardHtml = card.getHtml();
            } else {
                cardHtml = `<a href="${card.ref}" data-link>` + card.getHtml() + `</a>`;
            }
            this.chaptersHtml.push(cardHtml);
        });
    }

    async getHtml() {
        return `
            <div class="container">
                ${this.chaptersHtml[0]}
                ${this.chaptersHtml[1]}
                ${this.chaptersHtml[2]}
                ${this.chaptersHtml[3]}
                ${this.chaptersHtml[4]}
            </div>
        `;
    }
}