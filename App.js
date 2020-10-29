
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage.js';
import PeopleDetailPage from './src/pages/PeopleDetailPage.js';

import capitalizeFirstLetter, { captalizeFirstLetter } from './src/util/capitalizeFirstLetter.js';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation}) => {
      const peopleName = capitalizeFirstLetter( navigation.state.params.people.name.first)+' '+capitalizeFirstLetter(navigation.state.params.people.name.last );
        return({ 
        title: peopleName ,
        headerTintColor: '#9238f4',
        headerTitleStyle: {
          color: '#9238f4',
          fontSize: 30,
          flexGrow: 1,
        }
      });
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'Contatos',
    readerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#171717',
      borderBottomWidth: 1,
      borderBottomColor: '#9238f4'
    },
    headerTitleStyle: {
      color: '#9238f4',
      fontSize: 30,

      flexGrow: 1,
      textAlign: 'center'
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
