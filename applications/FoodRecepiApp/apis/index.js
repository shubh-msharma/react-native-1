import axios from 'axios'
import { err } from 'react-native-svg'

export const getCategories = async (callback) =>{
    console.log("request is received to get categories")
    data = []
    try {
        console.log("calling api to get categories")
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        if(response && response.data){
            console.log("fetched categories",response.data.categories.length)
            data = response.data.categories;
        }
    } catch (error) {
        console.error(JSON.stringify(error))
    }
    console.log("calling the callback function to set categories")
    callback(data);
}

export const getMeals = async(category,callback) => {
    console.log("request is received to get meals by category",category);
    let data = []
    try {
        console.log("calling api to get meals by category",category);
        let res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        if(res && res.data && res.data.meals){
            console.log("fetched meal by category",category,res.data.meals.length);
            console.log(res.data)
            data = res.data.meals;
            console.log(data)
        }
    } catch (error) {
        console.error(JSON.stringify(error,null,4))
    }
    try {
        console.log("calling the callback function to set meals for category",category);
        callback(data);
    } catch (error) {
        console.error(JSON.stringify(error,null,4))
    }
}