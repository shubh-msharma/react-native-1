import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
// import { expenses as data } from "../constants/data"
import { addExpenseToDB, deleteExpenseFromDB, fetchExpensesFromDB, updateExpenseInDB } from '../http/expenseService'

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: (data) => { },
    updateExpense: (id, data) => { },
    deleteExpense: (id) => { },
    addExpenses: () => { }
})

function ExpenseContextProvider({ children }) {
    const [expenses, setExpenses] = useState([])

    const addExpenses = (expenses) => {
        setExpenses(expenses)
    }

    const addExpense = (expense) => {
        addExpenseToDB(expense).then((data) => {
            console.log("adding to firebase", data)
            expense["id"] = data;
            setExpenses(pre => [expense, ...expenses])
        })
    }
    const updateExpense = (id, partialExpense) => {
        const idx = expenses.findIndex((exp) => exp.id === id)
        if (idx === -1) return
        const filtered = expenses.filter((exp) => exp.id != id);
        const target = expenses[idx];
        const newData = { ...target, ...partialExpense }
        updateExpenseInDB(id, newData).then(() => {
            setExpenses(pre => [newData, ...filtered])
        })
    }
    const deleteExpense = (id) => {
        deleteExpenseFromDB(id).then(() => {
            setExpenses(pre => pre.filter((exp) => exp.id != id))
        })
    }

    return <ExpenseContext.Provider value={{
        expenses, addExpense, updateExpense, deleteExpense, addExpenses
    }}>
        {children}
    </ExpenseContext.Provider>
}

export default ExpenseContextProvider;

export const useExpenses = () => {
    const val = useContext(ExpenseContext);
    if (!val) throw new Error("no context found, make sure componenet is wrapped in context provided")
    return val
}