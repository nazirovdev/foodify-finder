class FoodMenu extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set foodList(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="img-card">
            <img src="${this._food.strMealThumb}" alt="">
            </div>
            <div class="title-card">
                <h1>${this._food.strMeal}</h1>
            </div>
        `;
    }
}

customElements.define('food-menu', FoodMenu);

export default FoodMenu;