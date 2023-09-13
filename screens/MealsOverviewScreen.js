import React from 'react'
import { MEALS } from '../data/dummy-data'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import MealItem from '../components/MealItem';
// import { useRoute } from '@react-navigation/native';

function MealsOverviewScreen({ navigation, route }) {
    // const categoryId = useRoute().params.categoryId; // alternative way

    const renderMealItem = (itemData) => {
        return (
            <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl}>{itemData.item.title}</MealItem>
        );
    }

    const categoryId = route.params.categoryId;
    const displayedItems = MEALS.filter(item => {
        return item.categoryIds.indexOf(categoryId) >= 0;
    });
  return (
    <View style={styles.container}>
              <FlatList key={'#'}
                data={displayedItems} 
                keyExtractor={(item) => item.id} 
                renderItem={(renderMealItem)}
                numColumns={2}/>
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