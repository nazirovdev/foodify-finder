import FoodMenu from "./FoodMenu.js";


class FoodList extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }

    set foodLists(food) {
        this._food = food;
        this.render();
    }

    set errorMessage(error) {
        this._shadowRoot.innerHTML = '';
        this.setAttribute('class', 'jancok')
        this.classList.add('jancok');
        this._shadowRoot.innerHTML += error;
    }

    render() {
        this.classList.remove('jancok');
        this._shadowRoot.innerHTML = `
            <style>
            
            </style>
        `
        this._shadowRoot.innerHTML += '';
        this._food.forEach(food => {
            const foodMenux = document.createElement('food-menu');
            foodMenux.foodList = food;

            this._shadowRoot.appendChild(foodMenux);
        });
    }
}

customElements.define('food-list', FoodList);

export default FoodList;