import React from 'react';
import { Text, View } from 'react-native';
import MultipleChoiceButton from '../MultipleChoiceButton/MultipleChoiceButton';
import MultipleChoiceGridStyle from './MultipleChoiceGridStyle';


const MultipleChoiceGrid = () => {
    return (
        <View style={MultipleChoiceGridStyle.container}>
            <MultipleChoiceButton style={MultipleChoiceGridStyle. button} song="song 1" artist="artist 1"/>
            <MultipleChoiceButton style={MultipleChoiceGridStyle. button} song="song 2" artist="artist 2"/>
            <MultipleChoiceButton style={MultipleChoiceGridStyle. button} song="song 3" artist="artist 3"/>
            <MultipleChoiceButton style={MultipleChoiceGridStyle. button} song="song 4" artist="artist 4"/>
        </View>
        
    )
    
}

export default MultipleChoiceGrid;