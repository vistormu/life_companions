import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("404 Not Found");
    }

    async getHtml() {
        return `
        <h1>Error 404 Not Found</h1>
        `;
    }
}