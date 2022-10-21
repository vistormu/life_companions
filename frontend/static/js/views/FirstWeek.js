import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("First Week");
    }

    async getHtml() {
        return `
        <h1>First Week</h1>
        `;
    }
}