class SearchBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        this.render();
    }

    get value() {
        return this._shadowRoot.querySelector('#searchInput').value;
    }

    set eventClick(event) {
        this._event = event;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                ::placeholder {
                    color: #1c6161;
                    font-size: 15px;
                }

                input {
                    width: 80%;
                    outline: none;
                    border: none;
                    padding: 0.4em;
                    border-bottom: solid 1px #1c6161;
                }
                
                input:focus {
                    color: #1c6161;
                    border-bottom: solid 2px #1c6161;
                    font-size: 15px;
                }
                
                input:focus::placeholder {
                    color: #1c6161;
                    font-weight: 600;
                }

                button {
                    display: block;
                    width: 150px;
                    background-color: #1c6161;
                    outline: none;
                    border-style: none;
                    color: #e7e7e7;
                    text-transform: uppercase;
                    padding: 0.7em;
                    cursor: pointer;
                    font-size: 0.9em;
                    border-radius: 5px;
                    transition: 0.2s;
                }
                
                button:hover {
                    background-color: #298585;
                }
                
                button:active {
                    background-color: #1c6161;
                }
            </style>
        `
        this._shadowRoot.innerHTML += `
            <input type="search" id="searchInput" placeholder="Masukan Menu Makanan">
            <button id="searchButton">Search</button>
        `;

        this._shadowRoot.querySelector('#searchButton').addEventListener('click', this._event);
    }
    
}

customElements.define('search-bar', SearchBar);

export default SearchBar;