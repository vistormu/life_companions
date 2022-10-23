import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Capítulo 1");
    }

    async getHtml() {
        return `
        <h1>Capítulo 1.</h1>
        `;
    }
}