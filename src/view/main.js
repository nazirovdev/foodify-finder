import AppBar from "../components/AppBar.js";
import FoodList from "../components/FoodLists.js";
import SearchBar from "../components/SearchBar.js";
import DataSource from "../data/DataSource.js";

const main = () => {
    const searchBar = document.querySelector('search-bar');
    const foodLists = document.querySelector('food-list');

    const buttonSearchClick = async () => {
        try {
            const foods = await DataSource.searchFood(searchBar.value);
            renderResult(foods);
        }catch(err) {
            fallBackResult(err.message);
        }
    }

    const renderResult = (data) => {
        foodLists.foodLists = data;
    }

    const fallBackResult = (err) => {
        foodLists.errorMessage = err;
    }

    searchBar.eventClick = buttonSearchClick;
}

export default main;