import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Capítulo 1");
    }

    async getHtml() {
        return `
        <h2>Capítulo 1. La Luz de La Balanza</h2>
        <p>
            en la Gran Danza de Los Doce <br>
            le tocaba a la Diosa Temis supervisar &#9900 <br>
            iluminando con su Balanza <br>
            a toda una galaxia &#9900 <br>
            se percató <br>
            a una gran distancia <br>
            de una sinuosa mirada &#9900 <br>
            las responsables dos almas <br>
            que hasta el momento <br>
            parecían oscilar <br>
            a distinta frecuencia &#9900 <br>
            se acompasaron <br>
            al juntarse a menos de un palmo &#9900 <br>
            de esta forma &#9900 <br>
            con una leve sonrisa <br>
            y un giro de muñeca &#9900 <br>
            la Diosa decantó su utensilio <br>
            y favoreció el destino del baile <br>
            que estaba presenciando &#9900 <br>
        </p>
        `;
    }
}