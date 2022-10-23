import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Capítulo 2");
    }

    async getHtml() {
        return `
        <h1>Capítulo 2.</h1>
        `;
    }
}