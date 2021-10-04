class FoodMenu extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    set foodList(food) {
        this._food = food;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                .card {
                    box-shadow:3px 3px 10px rgba(0,0,0,0.5);
                    background: #f2f2f2;
                    border-radius:10px;
                    overflow: hidden;
                    margin-bottom:2.5em;
                }

                img {
                    width: 100%;
                    height: 234px;
                    display: block;
                }

                h1 {
                    font-family: sans-serif;
                    font-size:1em;
                    display:flex;
                    justify-content: center;
                }
            </style>
        `
        this._shadowRoot.innerHTML += `
            <div class="card">
                <div class="img-card">
                    <img src="${this._food.strMealThumb}" alt="">
                </div>
                <div class="title-card">
                    <h1>${this._food.strMeal}</h1>
                </div>
            </div>
        `;
    }
}

customElements.define('food-menu', FoodMenu);

export default FoodMenu;