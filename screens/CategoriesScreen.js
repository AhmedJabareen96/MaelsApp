import React from 'react'
import { View, FlatList, StyleSheet} from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
// import { useNavigation } from '@react-navigation/native'



function CategoriesScreen({ navigation }) {
  // const navigation = useNavigation(); // alternative way

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
        navigation.navigate('MealsOverview', {
          categoryId: itemData.item.id,
          categoryTitle: itemData.item.title
        });
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