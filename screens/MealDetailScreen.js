import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
function MealDetailScreen() {
    const nav = useRoute();
    const meal = MEALS.find(item => item.id === nav.params.mealId);
  return (
    <ScrollView>
        <View style={styles.imageContainer}>
        <Image source={{uri: meal.imageUrl}} style={styles.image}/>
        </View>
        <Text style={[styles.title, styles.textColor]}>{meal.title}</Text>
        <View>
          <MealDetails 
            duration={meal.duration}
            complexity={meal.complexity}
            affordability={meal.affordability}
            textStyle = {{color: 'white'}}
            />
        </View>
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
        </View>
        {meal.ingredients.map(item => {
          return <Text key={item}>{item}</Text>
        })}

        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
        </View>
        {meal.steps.map(item => {
          return <Text key={item}>{item}</Text>
        })}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 20,
    margin: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 350
  },
  title:{
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 8
  },
  textColor: {
    color: 'white'
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24

  }
  
});

export default MealDetailScreen