import { useState } from "react"
import { useEffect } from "react"
import { View , Text} from "react-native"
import ErrorOverlay from "../components/ErrorOverlay"
import ExpensesOutput from "../components/ExpensesOutput"
import LoadingOverlay from "../components/LoadingOverlay"
import { fetchExpensesFromDB } from "../http/expenseService"
import { useExpenses } from "../store/ExpenseContext"
import { minus } from "../Utils/DateUtils"
export default ()=>{
    const {expenses,addExpenses}  = useExpenses()
    const [fetching,setFetching] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        async function fetchExpenses(){
            try {
               setFetching(true)
            const data = await fetchExpensesFromDB()
            setFetching(false)
            addExpenses(data) 
            } catch (err) {
                setFetching(false)
                setError({
                    title:"Failed to Retrieve Expenses",
                    msg:"Oops! Unable to fetch expenses at the moment. Please check your internet connection and try again."
                })
            }
        }
        fetchExpenses()
    },[])

    if(error && !fetching){
        return <ErrorOverlay
            errMsg={error.msg}
            errTitle={err.title}
            onPress={()=>{
                
            }}
        />
    }

    if(fetching){
        return <LoadingOverlay/>
    }
   
    const currDate = new Date();
    const temp = minus(currDate,2)
    console.log("last 7th date",temp,"current date",currDate)
    const filtered = expenses.filter((expense)=>{
        return new Date(expense.date).getDate() > temp.getDate()
    })
    console.log("before filter",expenses.length,"after filter",filtered.length)
    return <View style={{
        flex:1
    }}>
        <ExpensesOutput 
            expenses={filtered}
            period={"Days"}
            periodCount={7}
            fallback={`No Expenses registered in last 7 days.`}
        />
    </View>
}