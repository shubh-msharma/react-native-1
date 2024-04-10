import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import MealDetails from './MealDetails'
import Title from './Title'

export default ({
    title, imageUrl, affordability, duration, complexity, handleMealDetailsNavigation
}) => {
    /*
       id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
    */
    return (
        <View style={styles.outerContainer}>
            <Pressable
                style={({ pressed }) => [
                    styles.innerContainer,
                    pressed ? { opacity: 0.5 } : null
                ]}
                android_ripple={{
                    color: "#ccc"
                }}
                onPress={handleMealDetailsNavigation}
            >
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <Title>{title}</Title>
                <MealDetails affordability={affordability} 
                            complexity = {complexity} 
                            duration={duration}
                        />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: 'white',
        marginHorizontal: 18,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 4,
        overflow: 'hidden'
    },
    innerContainer: {

    },
    image: {
        width: "100%",
        height: 250
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 5,
        paddingHorizontal: 5,
        textAlign: 'center'
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsItem: {
        marginHorizontal: 5,
        marginVertical: 4,
        fontSize: 15,
    }
})