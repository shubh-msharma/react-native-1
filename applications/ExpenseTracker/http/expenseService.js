import axios from "axios"
const BACKEND_URL = "https://hopeful-buckeye-257407.firebaseio.com"

export async function fetchExpensesFromDB(){
    const res = await axios.get(BACKEND_URL+"/expenses.json")
    const data = [];
    for(let key in res.data){
        data.push({...res.data[key],id:key})
    }
    return data
}
export async function addExpenseToDB(expense){
    const res = await axios.post(BACKEND_URL+"/expenses.json",expense)
    return res.data.name
}
export async function deleteExpenseFromDB(expenseId){
    console.log("deleting expense",expenseId)
    await axios.delete(BACKEND_URL+"/expenses/"+expenseId+".json")
}
export async function updateExpenseInDB(expenseId,expense){
    console.log("updating expense",expenseId,expense)
    await axios.put(BACKEND_URL+"/expenses/"+expenseId+".json",expense)

}