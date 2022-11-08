import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Capítulo 2");
    }

    async getHtml() {
        return `
        <h2>Capítulo 2. Las Cuatro Estaciones</h2>
        <p>
            la mirada de Apolo <br>
            tras el destello de una leve luz<br>
            ligeramente se torció <br>
            <br>
            proveniente del Cosmos <br>
            como un delicado guiño <br>
            su misión reconoció<br>
            <br>
            junto a Las Cuatro Estaciones <br>
            en el Prado se reunieron<br>
            para comenzar así La Creación <br>
            <br>
            al son de su armonía <br>
            moldeó el apolíneo Camino <br>
            a base de su Belleza y Perfección <br>
            <br>
            tras su último Suspiro<br>
            contempló aquella obra <br>
            digna de su Divina Inspiración <br>
            <br>
            una vez Las Almas llegaron <br>
            observó como su Camino tomaron <br>
            mediante el baile del que fue avisado<br>
            <br>
            presenció cómo se acoplaron y entrelazaron <br>
            proclamando así al resto de dioses <br>
            la conformidad de esta Unidad
        </p>
        `;
    }
}