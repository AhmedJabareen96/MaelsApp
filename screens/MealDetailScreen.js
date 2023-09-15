import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useContext, useLayoutEffect } from 'react'
import {View, Text, Image, StyleSheet, ScrollView, Pressable} from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import { FavouritesContext } from '../store/context/fsvourite-context';
function MealDetailScreen({ route, navigation}) {

    
    const favCtx = useContext(FavouritesContext);
    const nav = useRoute();
    const meal = MEALS.find(item => item.id === nav.params.mealId);

    const headerButtonHandrel = () => {
      if(!mealIsFavourite){
        favCtx.addFavourite(nav.params.mealId);
      }
      else {
        favCtx.removeFavourite(nav.params.mealId);
      }
    }
    
    const mealIsFavourite = favCtx.ids.includes(nav.params.mealId);


    useLayoutEffect(() => { 
      navigation.setOptions({
        headerRight: () => {
          return (
            <Pressable onPress={headerButtonHandrel}>
                <Text style={{fontSize:25, color: 'white'}}>{
                  mealIsFavourite ? '-' : '+'
                }</Text>
            </Pressable>
          );
        }
      });
    },[navigation, headerButtonHandrel]);
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
          return <Text key={item} style={styles.list}>* {item}</Text>
        })}

        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
        </View>
        {meal.steps.map(item => {
          return <Text key={item} style={styles.list}>* {item}</Text>
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
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24

  },
  list: {
    color: 'white',
    textAlign: 'justify',
    marginHorizontal: 24,
    marginVertical: 6
  }
  
});

export default MealDetailScreen