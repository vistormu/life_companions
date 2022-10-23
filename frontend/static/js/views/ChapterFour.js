import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Capítulo 4");
    }

    async getHtml() {
        return `
        <h1>Capítulo 4.</h1>
        `;
    }
}