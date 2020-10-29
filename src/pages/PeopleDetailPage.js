import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Line from '../components/Line.js';

export default class PeopleDetailPage extends React.Component {

    render() {
        const { people } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Image 
                    source={{ uri: people.picture.large }}
                    style={ styles.avatar}
                />
                <View style={styles.detailContainer}>
                    <Line label="Nome:" content={people.name.first} />
                    <Line label="Email:" content={people.email} />
                    <Line label="Cidade:" content={people.location.city} />
                    <Line label="Estado:" content={people.location.state} />
                    <Line label="Telefone:" content={people.phone} />
                    <Line label="Celular:" content={people.cell} />
                    <Line label="Nacionalidade:" content={people.nat} />
                    <Line label="Profissão:" content={people.job} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 15,
            backgroundColor: '#171717',
        },
        
        avatar: {
            aspectRatio: 1,
            borderRadius: 180,
           
        },

        detailContainer: {
            backgroundColor: '#9238f4',
            marginTop: 5,
            elevation: 5,
          
        },

    }
);