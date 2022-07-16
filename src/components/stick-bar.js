class StickBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
       this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <h1>The Meals</h1>`;
    }
}
customElements.define("stick-bar", StickBar); 

