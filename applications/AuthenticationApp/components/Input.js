import {View,TextInput,StyleSheet} from 'react-native';
import { colors1 } from '../theme/Styles';

export default ({placeholder,config,onChangeText,value}) => {
    return (
        <View style={styles.formInputContainer}>
            <TextInput
                placeholder={placeholder}
                style={styles.formInput}
                {...config}
                onChangeText = {onChangeText}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formInputContainer: {
        backgroundColor: colors1.primary100,
        marginVertical: 6,
        marginHorizontal: 3,
        padding: 4,
        borderRadius: 12,
        // flex:1
    },
    formInput: {
        // flex:1,
        fontSize: 20,
        padding: 3,
        color: colors1.text800,
        marginLeft:6
    },
})