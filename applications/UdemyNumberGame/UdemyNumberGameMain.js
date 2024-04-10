import { Pressable, Text, TextInput, View, Alert, Image, Dimensions, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'
import NumberContainer from './components/NumberContainer';
import PrimaryButton from './components/PrimaryButton';
import Title from './components/Title';
import GameControlCard from './components/GameControlCard';
import { PlusIcon, MinusIcon } from 'react-native-heroicons/solid'
import { FlatList } from 'react-native-gesture-handler';
import { hp, wp } from './utils/dimensionUtil'
let minBoundry = 1;
let maxBoundry = 100;

function getRandomNumberExcluding(min, max, excludedNumbers) {
    let randomNumber;
    let attempt = 0
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        ++attempt;
    } while (excludedNumbers.includes(randomNumber) && attempt < 10);
    return randomNumber;
}


export default () => {

    return (
        <>
            {
                <Screen />
            }
        </>

    )
}

const Screen = () => {
    const [pickedNumber, setPickedNumber] = useState();
    const [screen, setScreen] = useState("gameOver")
    const [rounds, setRounds] = useState(0);

    const handlePickedNumber = (num) => {
        setPickedNumber(parseInt(num))
        minBoundry = 0;
        maxBoundry = 100;
        setRounds(0)
        setScreen("startGame")
    }

    const handlerGameOver = (totalRounds) => {
        console.log("calling game over function")
        minBoundry = 0;
        maxBoundry = 100;
        setScreen("gameOver")
        setRounds(totalRounds)
    }
    const handleStartNewGameHandler = () => {
        console.log("calling start new game function")
        setScreen("controll")
        setPickedNumber(null)
        setRounds(0);
    }

    if (screen === "startGame") {
        const num = getRandomNumberExcluding(0, 99, [pickedNumber])
        console.log("re init excluded guesses")
        return <StartGameScreen
            excludedGuesses={[pickedNumber]}
            pickedNumber={pickedNumber}
            handlerGameOver={handlerGameOver}
            num={num}
            maxBoundry={maxBoundry}
            minBoundry={minBoundry}
        />
    }
    else if (screen === "controll") return <GameControlCard handlePickedNumber={handlePickedNumber} />
    else if (screen === "gameOver") return <GameOverScreen
        rounds={rounds}
        selectedNumber={pickedNumber}
        startNewGameHandler={handleStartNewGameHandler}
    />
    else return <Loader />
}

const Loader = () => {
    return <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}><Text style={{
        fontSize: 25,
        fontWeight: 'bold'
    }}>Loading .....</Text></View>
}

const GameOverScreen = ({ rounds, selectedNumber, startNewGameHandler }) => {
    const { height } = useWindowDimensions();
    console.log(height)
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 25,
            justifyContent: 'center'
        }}>
            <Title style={{ width: "50%" }}>Game Over</Title>
            {
                height < 420 ? null : <View
                    style={{
                        width: hp(40),
                        height: hp(40),
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: 'hidden',
                        borderRadius: wp(40),
                        marginVertical: 40,
                        marginHorizontal: 'auto',
                        borderWidth: 2,
                        borderColor: 'black'
                    }}>
                    <Image
                        source={require("../AnimatedOmBoarding/assets/5484597.jpg")}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </View>
            }
            <View style={{
                marginVertical: hp(4),
            }}>
                <Text style={{
                    fontSize: hp(2.7),
                    color: 'white',
                    fontFamily: "Inter_800ExtraBold"
                }}>
                    Your phone took <Text>{rounds}</Text> rounds to geuss number <Text>{selectedNumber}</Text>
                </Text>
            </View>
            <PrimaryButton
                onPress={startNewGameHandler}
            >
                <Text style={{
                    fontSize: hp(3),
                    fontWeight: '700',
                    textAlign: 'center',
                    color: "white",
                    padding: 10
                }}>
                    Start New Game
                </Text>
            </PrimaryButton>
        </View>
    )
}

const StartGameScreen = ({ pickedNumber, handlerGameOver, num, excludedGuesses }) => {
    console.log("re rendered", "StartGameScreen")
    const [currentGuess, setCurretnGuess] = useState(num);
    const [randonGuessList, setRandonGuessList] = useState([num]);
    const [rounds, setRounds] = useState(0);
    console.log("setting init guess")
    console.log(currentGuess, num)
    useEffect(() => {
        console.log("checking if game is over", currentGuess, pickedNumber)
        if (currentGuess == pickedNumber) {
            handlerGameOver(rounds);
        } else {
            console.log("game is still on", currentGuess, pickedNumber)
        }
    }, [currentGuess, pickedNumber, handlerGameOver])
    const handlerIncOrDec = (action) => {
        if ((pickedNumber > currentGuess && action === "dec") || pickedNumber < currentGuess && action === "inc") {
            Alert.alert("Warning: Cheating Detected!", "Fair play is essential for an enjoyable gaming experience. Please refrain from cheating to maintain the integrity of the game. ",
                [{
                    text: "Sorry", style: "cancel", onPress: () => {

                    }
                }])
            return;
        }
        excludedGuesses.push(currentGuess)
        if ("inc" === action) {
            minBoundry = currentGuess;
            const temp = getRandomNumberExcluding(minBoundry, maxBoundry, excludedGuesses);
            console.log("[inc]setting new guess : ", temp, minBoundry, maxBoundry, excludedGuesses)
            setCurretnGuess(pre => temp)
            setRandonGuessList(pre => [temp, ...pre])
            setRounds(pre => pre + 1);
        } else {
            maxBoundry = currentGuess
            const temp = getRandomNumberExcluding(minBoundry, maxBoundry, excludedGuesses);
            console.log("[dec]setting new guess : ", temp, minBoundry, maxBoundry, excludedGuesses)
            setCurretnGuess(pre => temp)
            setRandonGuessList(pre => [temp, ...pre])
            setRounds(pre => pre + 1);
        }
    }
    const len = randonGuessList.length;
    const { width } = useWindowDimensions()
    const content = <>
        {/* computer guess */}
        <View style={{
            marginTop: 10,
            width: wp(60),
            alignItems: 'center',
        }}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
        </View>

        {/* higher or lower */}
        <View style={{
            marginTop: 10,
        }}>
            <Title>Higher or Lower ?</Title>
            <View style={{
                flexDirection: 'row',
                padding: 10,
                marginVertical: 10,
                borderWidth: 2,
                borderColor: "#f0b565",
                borderRadius: 10,
            }}>
                <View style={{
                    flex: 1
                }}>
                    <PrimaryButton onPress={() => handlerIncOrDec("inc")}>
                        <PlusIcon size={40} color="white" />
                    </PrimaryButton>
                </View>
                <View style={{
                    flex: 1
                }}>
                    <PrimaryButton onPress={() => handlerIncOrDec("dec")}>
                        <MinusIcon size={40} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </View>
    </>
    const contentWideScreen = <>
        {/* computer guess */}
        <View style={{
            marginTop: 6,
            width: wp(60),
            alignItems: 'center',
        }}>
            <Title>Opponent's Guess</Title>
        </View>
        {/* higher or lower */}
        <View style={{
            marginTop: 6,
        }}>
            <View style={{
                flexDirection: 'row',
                padding: 5,
                marginVertical: 6,
                borderWidth: 2,
                borderColor: "#f0b565",
                borderRadius: 10,
                width: wp(50),
                justifyContent: 'space-between'
            }}>
                <PrimaryButton onPress={() => handlerIncOrDec("inc")}>
                    <PlusIcon size={wp(10)} color="white" />
                </PrimaryButton>
                <NumberContainer>{currentGuess}</NumberContainer>
                <PrimaryButton onPress={() => handlerIncOrDec("dec")}>
                    <MinusIcon size={wp(10)} color="white" />
                </PrimaryButton>
            </View>
        </View>
    </>

    return (
        <View style={{
            flex: 1,
            padding: 24,
            marginVertical: 5,
            alignItems: 'center'
        }}>

            {
                width > 500 ? contentWideScreen : content
            }

            {/* logs */}
            <Title style={{
                marginTop: 10,
            }}>
                Logs
            </Title>
            <View style={{
                marginVertical: 10,
                paddingBottom: 10,
                height: hp(30),
            }}>
                <FlatList
                    data={randonGuessList}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{
                        alignItems: 'center',
                    }}
                    renderItem={({ index, item }) => {
                        return <View style={{
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            borderWidth: 2,
                            borderRadius: 25,
                            marginVertical: 4,
                            backgroundColor: "#ebcb98",
                            borderColor: "#8a7149",
                            flexDirection: 'row',
                            paddingVertical: hp(2),
                            width: wp(78)
                        }}>
                            <Text style={{
                                fontSize: hp(3),
                            }}># {len - index}</Text>
                            <Text style={{
                                fontSize: hp(3),
                            }}>Opponent's guess: {item}</Text>
                        </View>
                    }}
                />
            </View>
        </View>
    )
}