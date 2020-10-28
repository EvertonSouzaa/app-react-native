import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';


const PeopleListItem = props => {
  const { people } = props;
  const { title, first, last } = people.name;
  return (
    <View style={styles.line}>
          <Image style = { styles.avatar } source = { { uri: people.picture.thumbnail } }/>
          <Text style={styles.lineText}>{ `${title} ${first} ${last}`};</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 3,
    borderBottomColor: '#000',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    color: '#fff',
   
  },
  avatar: {
    aspectRatio: 1,
    width: 50,
  }
})

export default PeopleListItem