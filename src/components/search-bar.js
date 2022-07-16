class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#keyword").value;
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
            input[type=text]{
                font-family: Quicksand;
                background: #F5F1FF;
                border: 2px solid #a6c4fc;
                border-radius: 35px; 
                padding: 16px;
                box-sizing: border-box;
                margin-bottom: 8px;
                font-size: 24px;
            }
            .btn-search {
                width: fit-content;
                border: none;
                font-family: Quicksand;
                border-radius: 16px;
                padding: 12px 24px;
                border:2px solid #a6c4fc;
                color: black;
                font-size: 24px;
                margin-top: auto;
                margin-left: auto;
                align-self: flex-end;
                cursor: pointer;
            }
            .btn-search:hover{
                background: rgb(194, 44, 136);
                color: white;
            }
            input[type=text]{
                outline: none;
            }
            </style>
            <input id="keyword" type="text" placeholder="Name of Meal ...">
            <button id="searchSubmit" class="btn-search" type="submit">Search</button>
        `;
        this.shadowDOM.querySelector("#searchSubmit").addEventListener("click", this._clickEvent);
    }
}
customElements.define("search-bar", SearchBar);