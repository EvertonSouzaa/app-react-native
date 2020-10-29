import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Line = ({ label = "", content = "-" }) => {

    return (

            <View style={styles.line}>
                
                <Text style={
                    [   styles.cellLabel,
                        label.lenght>8 ? styles.longLabel: null]}>{ label }</Text>
                
                <Text style={[styles.cellLabel, styles.cellBold]}>{content} </Text>

            </View>

    );
}

const styles = StyleSheet.create(
    {
       line: {
            flexDirection: 'row',
            paddingTop: 3,
            paddingBottom: 3,
            borderWidth:1,
            borderColor: '#171717'
        },

        cellLabel: {
            paddingLeft: 5,
            fontSize: 18,
            flex: 1
        },
 
        cellBold: {
            fontWeight: 'bold',
            flex: 4
        },

        longLabel: {
            fontSize: 8,
            backgroundColor: 'red'
        }

     }
);

export default Line;