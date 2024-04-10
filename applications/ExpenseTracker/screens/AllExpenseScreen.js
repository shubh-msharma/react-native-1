import { useState } from "react"
import { useEffect } from "react"
import { View, Text } from "react-native"
import { err } from "react-native-svg"
import ErrorOverlay from "../components/ErrorOverlay"
import ExpensesOutput from "../components/ExpensesOutput"
import LoadingOverlay from "../components/LoadingOverlay"
import { fetchExpensesFromDB } from "../http/expenseService"
import { useExpenses } from "../store/ExpenseContext"

export default () => {
    const { expenses, addExpenses } = useExpenses()
    const [fetching, setFeching] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        async function fetchExpenses() {
            try {
                setFeching(true)
                const data = await fetchExpensesFromDB()
                setFeching(false)
                addExpenses(data)
            } catch (err) {
                setFeching(false)
                setError({
                    title:"Failed to Retrieve Expenses",
                    msg:"Oops! Unable to fetch expenses at the moment. Please check your internet connection and try again."
                })
            }
        }
        fetchExpenses()
    }, [])
    if(error && !fetching){
        return <ErrorOverlay
            errMsg={error.msg}
            errTitle={error.title}
            onPress={()=>{
                
            }}
        />
    }

    if (fetching) {
        return <LoadingOverlay />
    }
    return <View style={{
        flex: 1
    }}>
        <ExpensesOutput
            expenses={expenses}
            period={"Total"}
            periodCount={0}
            fallback="No Expenses found."
        />
    </View>
}