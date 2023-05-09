import styles from './styles.css'

export enum AttributeButton {
    "categories" = "categories"
}

export default class Button extends HTMLElement{
    categories?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeButton, null> = {
            categories:null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeButton,
        oldValue: unknown,
        newValue: string
    ){
        switch(propName){
            default:
            this[propName] = newValue;
            break;
        }
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

        const css = this.ownerDocument.createElement('style');
        css.innerHTML = styles.toString();
        this.shadowRoot?.appendChild(css);

        const button = this.ownerDocument.createElement('button');
        button.innerText = `${this.categories}`;

        this.shadowRoot?.appendChild(button);
        
    }
}

customElements.define('app-button', Button);