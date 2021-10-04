class AppBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                h1 {
                    font-family: sans-serif;
                    color: #e7e7e7;
                    font-size: 1.5em;
                    cursor: default;
                }
            </style>
        `
        this._shadowRoot.innerHTML += `
            <h1>Foodify Finder</h1>
        `
    }
}

customElements.define('app-bar', AppBar);

export default AppBar;