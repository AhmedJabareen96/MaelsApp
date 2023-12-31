import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryGridTile from './components/CategoryGridTile';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesContextProvider from './store/context/fsvourite-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouritesScreen from './screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
      <Drawer.Navigator screenOptions={
        {
          headerStyle: {
          backgroundColor:'#351401' },
          headerTintColor:'white', 
          sceneContainerStyle:{backgroundColor:'#352f25'},
          drawerContentStyle: {
            backgroundColor: '#351401'
          },
          drawerInactiveTintColor:'white',
          drawerActiveTintColor:'#351401',
          drawerActiveBackgroundColor: '#e4baa1'

        }
      }> 
          <Drawer.Screen name="All Categories" component={CategoriesScreen} options={{
            drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name='list'/> 
          }}/>
          <Drawer.Screen name="Favourites Screen" component={FavouritesScreen} options={
            {
              drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name='bookmarks-outline'/>
            }
          }/>
      </Drawer.Navigator>

    );
}

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <StatusBar style='light'/>
      <FavouritesContextProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Drawer' screenOptions={
            {
              headerStyle: {
                backgroundColor:'#351401' },
                headerTintColor:'white', 
                contentStyle:{backgroundColor:'#352f25'}
            }
          }>
            <Stack.Screen name='Drawer' component={DrawerNavigator}
            options={
              {
              headerShown: false
            }
            }/>
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} options={({route, navigation})=> {
              const categoryId= route.params.categoryTitle + ' Meals';
                return ({
                  title: categoryId
                });
            }}/>
            <Stack.Screen name='MealDetails' component={MealDetailScreen}
              options={
                {
                  title: "About The Meal"
                }
              }
            />
          </Stack.Navigator>
      </NavigationContainer>
      </FavouritesContextProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
