import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = (props) => (
    <View style={style.container} >
        <Text style={style.title}>{props.title}</Text>
    </View>
);

/* style sheet */
const style = StyleSheet.create({

    container: {
        // [pripriedades CSS]: [Valor]
        marginTop: 25,
        backgroundColor: '#169c39',

        // Flex Box
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 50,
        color: '#fff',
        // image: 'src\imagens\logoVetNaWeb.jpg'
    }

});


export default Header;