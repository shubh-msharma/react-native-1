import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { GlobalStyles } from '../constants/styles'
import { formattedDate } from '../Utils/DateUtils'

export default ({ data ,navigation}) => {
    return (
        <TouchableOpacity onPress={()=>{
            navigation.navigate("ManageExpense",{
                expenseId:data.item.id,
                currentExpenseData:JSON.stringify(data.item)
            })
        }} style={styles.card}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: GlobalStyles.colors.primary200,
                // padding:5
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '700',
                        textAlign: 'center',
                        color: 'white'
                    }}>{data.item.category}</Text>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    borderBottomStartRadius: 30,
                    paddingLeft: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingRight: 4
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: GlobalStyles.colors.primary700
                    }}>{data.item.amount}</Text>
                </View>
            </View>

            <View style={{
                flex: 1,
                minHeight: 60,
                paddingHorizontal: 10,
                paddingVertical: 6,
            }}>
                <Text style={{
                    fontSize: 17
                }}>{data.item.description}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-between"
            }}>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingVertical: 3,
                    gap: 2,
                    flex: 1
                }}>
                    {
                        data.item.tags.map((item, index) => {
                            return (
                                <View key={index} style={{
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    borderColor: GlobalStyles.colors.primary800,
                                    paddingHorizontal: 4,
                                    backgroundColor:GlobalStyles.colors.primary200
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                        textTransform: 'capitalize',
                                        color:'white'
                                    }}>{item}</Text>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={{
                    alignItems: 'flex-end',
                    justifyContent:'flex-end',
                    paddingRight: 4
                }}>
                    <Text>{formattedDate(data.item.date)}</Text>
                </View>
            </View>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 5,
        elevation: 4,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 7,
        overflow: 'hidden',
        shadowColor: GlobalStyles.colors.primary100,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 8,
        shadowOpacity: 0.5
    }
})