import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Capítulo 5");
    }

    async getHtml() {
        return `
        <h1>Capítulo 5.</h1>
        `;
    }
}