import React from 'react';
import { Text, View } from 'react-native';
import MultipleChoiceButtonStyle from './MultipleChoiceButtonStyle';

const MultipleChoiceButton = (props: any) =>{
    return (
        <View style={props.style}>
            <Text style={MultipleChoiceButtonStyle.smallText}>{props.song},{props.artist}</Text>
        </View>
    )
}

export default MultipleChoiceButton 