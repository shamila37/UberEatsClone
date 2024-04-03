import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'

export default function HeaderTabs() {
  return (
    <View style={{flexDirection: "row", alignSelf: "center"}}>
      <HeaderButton text="Delivery"/>
      <HeaderButton text="Pickup"/>
    </View>
  );
}

const HeaderButton = (props) => (
    // <View>
        <TouchableOpacity>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    // </View>
);