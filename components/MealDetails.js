import { useRoute } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
function MealDetails({duration, complexity, affordability, style, textStyle}) {
  return (
    <View style={[styles.details, style]}>
        <Text style={[styles.detalItem, textStyle]}>{duration} min  |</Text>
        <Text style={[styles.detalItem, textStyle]}>{complexity}  |</Text>
        <Text style={[styles.detalItem, textStyle]}>{affordability}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
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
});
export default MealDetails