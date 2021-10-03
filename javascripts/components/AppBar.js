class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <h1>Foodify Finder</h1>
        `
    }
}

customElements.define('app-bar', AppBar);

export default AppBar;