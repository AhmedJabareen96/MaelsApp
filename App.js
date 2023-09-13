import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryGridTile from './components/CategoryGridTile';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='MealsCategories' screenOptions={
            {
              headerStyle: {
                backgroundColor:'#351401' },
                headerTintColor:'white', 
                contentStyle:{backgroundColor:'#352f25'}
            }
          }>
            <Stack.Screen name='MealsCategories' component={CategoriesScreen}
            options={
              {title: 'All Categories', 
            }
            }/>
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} options={{title: 'Available Meals'}}/>
          </Stack.Navigator>
      </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
