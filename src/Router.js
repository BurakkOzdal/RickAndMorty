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
        <Stack.Screen component={HomePage} name={'HomeScreen'} options={{headerStyle:{backgroundColor:"#69C8EC99"}}}/>
        <Stack.Screen component={ChapterDetail} name={'ChapterDetailScreen'} />
        <Stack.Screen component={CharacterDetail} name={'CharacterDetailScreen'}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;