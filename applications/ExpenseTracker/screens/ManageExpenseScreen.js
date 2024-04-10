import { StatusBar } from "expo-status-bar"
import { View, Text } from "react-native"
import { GlobalStyles } from "../constants/styles"
import { useEffect } from "react"
import IconButton from "../UI/IconButton"
import { useExpenses } from "../store/ExpenseContext"
import ExpenseForm from "../components/ExpenseForm"
import { useState } from "react"
import LoadingOverlay from "../components/LoadingOverlay"
import ErrorOverlay from "../components/ErrorOverlay"

export default ({ navigation, route }) => {
    const expenseId = route.params?.expenseId;
    const currentExpenseDataStr = route.params?.currentExpenseData;
    const currentExpenseData = currentExpenseDataStr ? JSON.parse(currentExpenseDataStr) : {};
    const [error, setError] = useState(null)
    useEffect(() => {
        navigation.setOptions({
            title: expenseId ? "Edit Expense" : "Add Expense"
        })
    }, [navigation, expenseId]);

    const { deleteExpense, addExpense, updateExpense } = useExpenses();
    const [inProcess, setInProcess] = useState(false);

    const cancelHandler = () => { navigation.goBack(); }
    const deleteExpenseHandler = () => {
        try {
            setInProcess(true)
            deleteExpense(expenseId)
            navigation.goBack();
        } catch (err) {
            setInProcess(false);
            setError({
                title: "Failed to Delete Expense",
                msg: "Oops! Unable to delete the expense. Please try again later."
            })
        }

    }

    const onSubmit = (data) => {
        try {
            setInProcess(true)
            data.amount = parseInt(data.amount)
            if (data?.tags) {
                data.tags = data.tags.split(",");
            }
            if (expenseId) {
                updateExpense(expenseId, data)

            } else {
                // data["id"] = Date.now();
                data.date = new Date().toString();
                addExpense(data)
            }
            navigation.goBack();
        } catch (err) {
            setInProcess(false);
            setError({
                title: "Failed to Add/Update Expense",
                msg: "Oops! Unable to add/update the expense. Please try again later."
            })
        }
    }

    if(error && !inProcess) {
        return <ErrorOverlay
            errMsg={error.msg}
            errTitle={error.title}
            onPress={()=>{
                navigation.goBack();
            }}
        />
    }

    if(inProcess){
        return <LoadingOverlay/>
    }

    return <View style={{
        backgroundColor: GlobalStyles.colors.primary800,
        flex: 1,
        paddingTop: 12
    }}>
        <StatusBar style="light" />
        <ExpenseForm
            cancelHandler={cancelHandler}
            expenseId={expenseId}
            onSubmit={onSubmit}
            currentData={currentExpenseData}
        />
        <View>
            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: 'white',
                marginVertical: 12
            }} />
            <View style={{
                alignItems: 'center'
            }}>
                <IconButton color={'red'} name={"delete"} onPress={deleteExpenseHandler} size={34} />
            </View>
        </View>
    </View>
}