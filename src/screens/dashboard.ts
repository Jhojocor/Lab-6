import { AttributeCard } from "../components/Card/Card";
import { getData } from "../services/getData";
import "../components/export"

class DashBoard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback(){
        const data = await getData();
        this.render(data);
    }

    render(data: any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `<h1>Chistes Api</h1>`;

        data.forEach((e: string) => {
            const card = this.ownerDocument.createElement('app-card');
            card.setAttribute(AttributeCard.categories, e);
            this.shadowRoot?.appendChild(card);
        });
    }
}

customElements.define('app-dashboard', DashBoard)