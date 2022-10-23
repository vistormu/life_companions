import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Capítulo 3");
    }

    async getHtml() {
        return `
        <h1>Capítulo 3.</h1>
        `;
    }
}