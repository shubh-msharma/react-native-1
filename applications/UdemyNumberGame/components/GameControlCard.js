import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import Card from './Card';
import PrimaryButton from './PrimaryButton';
import Title from './Title';
import {hp,wp} from '../utils/dimensionUtil'


const GameControlCard = ({ handlePickedNumber }) => {
    console.log("re rendered", "GameControll")
    const router = useRouter();

    const [enteredNumber, setEnteredNumber] = useState('')

    const handleEnterNumber = (enteredNumberArg) => {
        setEnteredNumber(enteredNumberArg);
    }

    const handleConfirmNumber = () => {
        const num = parseInt(enteredNumber);
        if (isNaN(num) || num <= 0 || num > 99) {
            Alert.alert("Invalid Number", "Number has to be between 1 to 99", [{
                text: "Okay", style: "destructive", onPress: handleRestNumber
            }])
            return
        }
        console.log("valid number", enteredNumber);
        // router.push("/app8/screens/startGameScreen")
        handlePickedNumber(enteredNumber);
    }

    const handleRestNumber = () => {
        setEnteredNumber("")
    }
    return (
        <View style={{
            flex: 1,
            marginTop: wp(11),
            alignItems: 'center',
        }}>
            <Title>Guess My Number</Title>
            <Card style={{
                maxWidth:wp(80)
            }}>
                <Text style={{
                    color: "#f5d18c",
                    fontSize: 26,
                    fontWeight: 'bold'
                }}>Enter a Number</Text>
                <TextInput
                    maxLength={2}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    keyboardType="number-pad"
                    style={{
                        fontSize: 50,
                        width: 70,
                        borderBottomWidth: 3,
                        borderBottomColor: "#f5d18c",
                        padding: 3,
                        textAlign: 'center',
                        marginHorizontal: 'auto',
                        fontFamily:'AmaticSC_700Bold'
                    }}
                    value={enteredNumber}
                    onChangeText={handleEnterNumber}
                />
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 5
                }}>
                    <View style={{
                        flex: 1
                    }}>
                        <PrimaryButton onPress={handleRestNumber}>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: '700',
                                textAlign: 'center',
                                color: "white",
                                fontFamily:'AmaticSC_700Bold'
                            }}>
                                Reset
                            </Text>
                        </PrimaryButton>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <PrimaryButton onPress={handleConfirmNumber}>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: '700',
                                textAlign: 'center',
                                color: "white",
                                fontFamily:'AmaticSC_700Bold'
                            }}>
                                Confirm
                            </Text>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default GameControlCard;