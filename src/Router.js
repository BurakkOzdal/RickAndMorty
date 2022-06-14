import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//pages
import HomePage from './pages/Home';
import ChapterDetail from './pages/ChapterDetail';
import CharacterDetail from './pages/CharacterDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={HomePage}
          name={'HomeScreen'}
          options={{headerStyle: {backgroundColor: '#69C8EC99'},headerTitle:"Home",headerTitleAlign:"center",headerTitleStyle:{color:"black"}}}
        />
        <Stack.Screen
          component={ChapterDetail}
          name={'ChapterDetailScreen'}
          options={{headerStyle: {backgroundColor: '#69C8EC99'},headerTitle:"Chapter Detail",headerTitleAlign:"center",headerTitleStyle:{color:"black"}}}
        />
        <Stack.Screen
          component={CharacterDetail}
          name={'CharacterDetailScreen'}
          options={{headerStyle: {backgroundColor: '#69C8EC99'},headerTitle:"Character Detail",headerTitleAlign:"center",headerTitleStyle:{color:"black"}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
