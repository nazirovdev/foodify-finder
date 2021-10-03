class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    get value() {
        return this.querySelector('#searchInput').value;
    }

    set eventClick(event) {
        this._event = event;
        this.render();
    }

    render() {
        this.innerHTML = `
                <input type="search" id="searchInput" placeholder="Masukan Menu Makanan">
                <button id="searchButton">Search</button>
        `;

        this.querySelector('#searchButton').addEventListener('click', this._event);
    }
    
}

customElements.define('search-bar', SearchBar);

export default SearchBar;