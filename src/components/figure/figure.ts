export enum AttributeFigure {
    "name" = "name",
    "imageUrl" = "imageUrl",
}

export default class Figure extends HTMLElement {
    name?: string;
    imageUrl?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeFigure, null> = {
            name: null,
            imageUrl: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeFigure,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <section class="card">
                    <img src="${this.imageUrl}">
                    <h2>${this.name}</h2>
                </section>
            `
        }
    }
}

customElements.define('app-figure',Figure);