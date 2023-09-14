import React from 'react'
import { MEALS } from '../data/dummy-data'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import MealItem from '../components/MealItem';
// import { useRoute } from '@react-navigation/native';

function MealsOverviewScreen({ navigation, route }) {
    // const categoryId = useRoute().params.categoryId; // alternative way

    const renderMealItem = (itemData) => {

        const pressMealHandler = () => {
            navigation.navigate('MealDetails', {
                mealId: itemData.item.id
            });
        }
        const item = itemData.item;
        const objProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            onPress: pressMealHandler
        }
        return (
            <MealItem {...objProps}>{itemData.item.title}</MealItem>
        );
    }

    const categoryId = route.params.categoryId;
    const displayedItems = MEALS.filter(item => {
        return item.categoryIds.indexOf(categoryId) >= 0;
    });
  return (
    <View style={styles.container}>
              <FlatList
                data={displayedItems} 
                keyExtractor={(item) => item.id} 
                renderItem={(renderMealItem)}
                />
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