class DataSource {
    static searchFood(keyword = '') {
        return fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response;
            })
            .then(data => {
                return data.json()
            })
            .then(meals => {
                return meals.meals.filter(meal => meal.strMeal.toLowerCase().includes(keyword.toLowerCase()));
            })
            .catch(err => {
                throw new Error(`${keyword} Not Found`);
            })
    }
}

export default DataSource;