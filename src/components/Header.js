import React from 'react';
import{View, Text, StyleSheet} from "react-native";

const Header = (props) => (
  <View style = {style.container}>
    <Text style = {style.title}>{props.title}</Text>
  </View>
);

const style = StyleSheet.create ( {
  container:  {
    marginTop: 25,
    backgroundColor: '#171717',
  
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:  {
    fontSize: 50,
    color: '#9238f4',
  
  }
});

export default Header;