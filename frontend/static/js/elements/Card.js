export default class {
    constructor(image, title, description, ref, locked) {
        this.image = image
        this.title = title
        this.description = description
        this.locked = locked
        this.ref = ref
    }

    getHtml() {
        if (!this.locked) {
            return `<div class="card">
                        <div class="card-content">
                            <img src="/static/assets/${this.image}">
                            <h1><b>${this.title}</b></h1> 
                            <p>${this.description}</p> 
                        </div>
                        <hr class="rounded">
                    </div>`;
        } else {
            return `<div class="locked-card">
                        <div class="locked-card-content">
                            <img src="/static/assets/lock.png">
                            <h1 style="color: #c4c4c4"><b>${this.title}</b></h1> 
                            <p>Contenido bloqueado</p> 
                        </div>
                        <hr class="rounded" style="border: 1px solid #c4c4c4;">
                    </div>`;
        }
    }
}