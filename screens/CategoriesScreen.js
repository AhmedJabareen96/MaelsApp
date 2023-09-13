import React from 'react'
import { View, FlatList, StyleSheet} from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

let renderCategoryItem = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}

function CategoriesScreen() {
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