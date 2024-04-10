import ExpenseList from "./ExpenseList"
import ExpenseSummary from "./ExpenseSummary"
import { View, StyleSheet,Text } from 'react-native'
import { GlobalStyles } from "../constants/styles"

export default ({ period, periodCount, expenses, fallback }) => {
    const moneyAmount = expenses.reduce((pre, curr) => {
        return pre + curr.amount;
    }, 0)
    let content = <Text style = {styles.infoText}>{fallback}</Text>
    if(expenses.length > 0){
        content =  <ExpenseList expenses={expenses} />
    }
    return (
        <View style={styles.container}>
            <ExpenseSummary
                moneyAmount={moneyAmount}
                period={period}
                periodCount={periodCount}
            />
           {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
        flex: 1
    },
    infoText:{
        fontSize:24,
        textAlign:'center',
        color:'white'
    }
})