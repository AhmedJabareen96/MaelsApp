import React from 'react'
import { MEALS } from '../data/dummy-data'
import { View, Text, StyleSheet } from 'react-native'

function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
        <Text>
            MEALS Screen
        </Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});


export default MealsOverviewScreen