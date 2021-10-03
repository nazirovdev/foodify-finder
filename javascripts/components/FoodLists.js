import FoodMenu from "./FoodMenu.js";


class FoodList extends HTMLElement {
    set foodLists(food) {
        this._food = food;
        this.render();
    }

    set errorMessage(error) {
        this.innerHTML = '';
        this.setAttribute('class', 'jancok')
        this.classList.add('jancok');
        this.innerHTML += error;
    }

    render() {
        this.classList.remove('jancok');
        this.innerHTML = '';
        this._food.forEach(food => {
            const foodMenux = document.createElement('food-menu');
            foodMenux.foodList = food;

            this.appendChild(foodMenux);
        });
    }
}

customElements.define('food-list', FoodList);

export default FoodList;