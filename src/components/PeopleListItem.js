
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// import { capitalizeFirstLetter } from '../util';

import { capitalizeFirstLetter } from '../util';

const PeopleListItem = props => {
    const { people, navigateToPeopleDetail } = props;
    const { title, first, last } = people.name;

    return (
        <TouchableOpacity onPress={() => {
            // console.log('Clicou em mim', first);
            navigateToPeopleDetail( {people});
        }} >
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
                <Text style={styles.linetext}>
                    {/* { title +' '+ first +' '+ last } */}
                    {`${
                        // capitalizeFirstLetter(title)
                        title
                        } ${
                        // capitalizeFirstLetter(first)
                        first
                        } ${
                        // capitalizeFirstLetter(last)
                        last
                        }`}
                </Text>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create(

    {
        line:
        {
            height: 60,
            borderBottomWidth: 3,
            borderBottomColor: '#000',

            alignItems: 'center',
            flexDirection: 'row'
        },
        linetext:
        {
            fontSize: 20,
            paddingLeft: 15,
            flex: 6,

            color: 'white'
        },

        avatar:
        {
            marginLeft: 15,
            aspectRatio: 1,
            flex: 1,
            borderRadius: 50
        }

    }
);

export default PeopleListItem;