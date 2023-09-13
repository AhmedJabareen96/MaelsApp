import React from 'react'
import { View, Text, Pressable, Image, StyleSheet} from 'react-native'

function MealItem({ children, title, imageUrl}) {
  return (
    <View>
        <Pressable>
            <View>
                <Image source={{uri: imageUrl}} style={styles.image}/>
                <Text style={styles.title}> {title} </Text>
                {console.log(imageUrl)}
            </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    }
})

export default MealItem