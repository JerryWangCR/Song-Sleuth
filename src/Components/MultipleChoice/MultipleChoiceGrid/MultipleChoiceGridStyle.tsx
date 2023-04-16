import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display: "flex",
        width: '100%',
        flexDirection: 'row',
        flex: 1,
        flexWrap: "wrap",
        alignItems: 'flex-start',
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 10
    },

    button:{
        margin: '5%',
        width:'40%',
        height: '40%',
        borderStyle: 'solid',
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 10
    
    }

});