import React from 'react'
import { View, Text, Pressable, Image, StyleSheet, Platform} from 'react-native'

function MealItem({ children, title, imageUrl, duration, complexity, affordability}) {
  return (
    <View style={styles.MealItem}>
        <Pressable android_ripple={{color: "#ccc"}}>
            <View style={styles.innerContainer}>
            <View>
                <Image source={{uri: imageUrl}} style={styles.image}/>
                <Text style={styles.title}> {title} </Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detalItem}>{duration} min  |</Text>
                <Text style={styles.detalItem}>{complexity}  |</Text>
                <Text style={styles.detalItem}>{affordability}</Text>
            </View>
            </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    MealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    image: {
        width: '100%',
        height: 200
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detalItem: {
        fontSize: 16,
        marginHorizontal: 4
    }
})

export default MealItem