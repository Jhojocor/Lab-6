import { AttributeButton } from "../Button/Button";
import styles from './styles.css'

export enum AttributeCard{
    "categories" = "categories"
}

export default class Card extends HTMLElement{
    categories: string = "";

    static get observedAttributes(){
        const attrs: Record<AttributeCard, null> = {
            categories:null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCard,
        oldValue: unknown,
        newValue: string
    ){
        switch(propName){
            default:
            this[propName] = newValue;
            break;
        }
        this.render();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;

        const section = this.ownerDocument.createElement('section');
        const container = this.ownerDocument.createElement('div');

        const css = this.ownerDocument.createElement('style');
        css.innerHTML = styles.toString();
        this.shadowRoot?.appendChild(css);

        const button = this.ownerDocument.createElement('app-button');
        button.setAttribute(AttributeButton.categories, this.categories);

        container.appendChild(button);

        this.shadowRoot?.appendChild(container);
        
    }
}

customElements.define('app-card', Card);