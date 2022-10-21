export default class {
    constructor(image, title, description, locked) {
        this.image = image
        this.title = title
        this.description = description
        this.locked = locked
    }

    getHtml() {
        if (!this.locked) {
            return `<div class="card">
                        <img src="/static/assets/${this.image}" style="width:100%">
                        <div class="card-content">
                            <h1><b>${this.title}</b></h1> 
                            <p>${this.description}</p> 
                        </div>
                    </div>`;
        } else {
            return `<div class="locked-card">
                        <img src="/static/assets/${this.image}" style="width:100%">
                        <div class="locked-card-content">
                            <h1><b>Locked</b></h1> 
                            <p>Se desbloqueará en...</p> 
                        </div>
                    </div>`;
        }
    }
}