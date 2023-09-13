import React from 'react'
import { View, FlatList, StyleSheet} from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'



function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (itemData) => {
  
    const pressHandler = () => {
        navigation.navigate('MealsOverview');
    }
    return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    );
}

  return (
    <View>
      <FlatList key={'#'}
                data={CATEGORIES} 
                keyExtractor={(item) => item.id} 
                renderItem={(renderCategoryItem)}
                numColumns={2}/>
    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default CategoriesScreen