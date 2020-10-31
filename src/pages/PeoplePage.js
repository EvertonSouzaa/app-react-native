import React from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';

// import Header from '../components/Header.js';
import PeopleList from '../components/PeopleList.js';

import axios from 'axios';

export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };

  }

  componentDidMount() {
    this.setState({ loading: true} );
    setTimeout(()=> {

    /* Promises */
    axios
        .get('https://randomuser.me/api/?nat=br&results=15')
        .then(response => {
            const { results } = response.data;
            this.setState({
              peoples: results,
              loading: false,
            });
        }).catch( error => {
            this.setState( {
                loading: false,
                error: true })
        });
    },3500 )
  }



  render() {
    return (
      <View style={styles.container}>
          {/* { this.renderLoading() } */}
          {
              this.state.error
              ? <Text style={styles.errorMessage}> Ops... Algo deu errado... </Text>
              : this.state.loading 
                  ? <ActivityIndicator size="large" color="white" />
                  :  <PeopleList
                        peoples={this.state.peoples} 
                        onPressItem={ pageParams => {
                        this.props.navigation.navigate('PeopleDetail', pageParams );
                      }}/>
          }
         
      </View>
    );
  }
}


const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center'
            },

      errorMessage: {
            color: 'red',
            alignSelf: 'center',
            justifyContent: 'center',
            fontWeight: "bold",
            fontSize: 18
      }
  
          });