import { useState } from "react"
import { View, StyleSheet, Alert } from "react-native"
import Button from "../UI/Button"
import Input from "./Input"


export default ({expenseId,cancelHandler,onSubmit,currentData}) => {
    // if(currentData){
    //     if(currentData.tags){
    //         currentData.tags = currentData.tags.join(",");
    //     }
    //     if(currentData.amount){
    //         currentData.amount = ""+currentData.amount
    //     }
    // }

    const [formData, setFormData] = useState({
        amount : {
            value : currentData?.amount ? ""+currentData.amount : "",
            isValid:true
        } , 
        description: {
            value : currentData?.description ? currentData.description : "",
            isValid:true
        } , 
        category : {
            value : currentData?.category ? currentData.category : "",
            isValid:true
        } , 
        tags : {
            value : currentData?.tags ? currentData.tags.join(",") : "",
            isValid:true
        }
    })

    const handleFormInput = (identifier, value) => {
        setFormData(pre => ({
            ...pre,
            [identifier]: {
                value:value,
                isValid:isValidValue(identifier,value)
            }
        }))
    }

    const isValidValue = (identifier,value) => {
        if(identifier === 'amount'){
            return value && value.length > 0 && false == isNaN(parseInt(value)) && parseInt(value) > 0
        }
        return value && value.trim().length > 0
    }

    const submitHandler = () => {
        const isValid = 
            isValidValue("amount",formData.amount.value) &&
            isValidValue("description",formData.description.value) &&
            isValidValue("category",formData.category.value) &&
            isValidValue("tags",formData.tags.value)
        if(false == isValid){
            Alert.alert("Invalid Values","Please check the entries")
            return
        }
        onSubmit({
            amount: formData.amount.value,
            description: formData.description.value,
            category: formData.category.value,
            tags: formData.tags.value,
        })
    }

    return (
        <View style={{
            // height:260
        }}>
            <View style={styles.catAm}>
                <Input
                    label={"Category"}
                    autoCorrect={false}
                    autoCapitalize={"words"}
                    keyboardType="default"
                    onChangeText={handleFormInput.bind(this, "category")}
                    value={formData.category.value}
                    isValid = {formData.category.isValid}
                />
                <Input
                    label={"Amount"}
                    autoCorrect={false}
                    keyboardType="number-pad"
                    onChangeText={handleFormInput.bind(this, "amount")}
                    value={formData.amount.value}
                    isValid = {formData.amount.isValid}
                />
            </View>

            <Input
                label={"Description"}
                autoCorrect={false}
                autoCapitalize={"sentences"}
                keyboardType="default"
                onChangeText={handleFormInput.bind(this, "description")}
                multiline={true}
                numberOfLines={4}
                value={formData.description.value}
                isValid = {formData.description.isValid}

            />
            <Input
                label={"Tags"}
                autoCorrect={false}
                autoCapitalize={"words"}
                keyboardType="default"
                onChangeText={handleFormInput.bind(this, "tags")}
                value={formData.tags.value}
                isValid = {formData.tags.isValid}

            />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 4,
                padding: 3
            }}>
                <Button onPress={cancelHandler} mode={"flat"}>{"Cancel"}</Button>
                <Button onPress={submitHandler}>{expenseId ? "Update" : "Add"}</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    catAm: {
        flexDirection: 'row',
        // alignItems:'center',
        // flex:1,
    }
})