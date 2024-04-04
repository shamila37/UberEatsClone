import { View, Text, TouchableOpacity, StatusBar, Platform } from 'react-native';
import React, { useState } from 'react'


export default function HeaderTabs(props: { activeTab: any; setActiveTab: any; }) {

  return (
    <View style={{flexDirection: "row", alignSelf: "center"}}>
      <HeaderButton 
        text="Delivery" 
        btnColor= "black" 
        textColor="white" 
        activeTab={props.activeTab} 
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton 
        text="PickUp" 
        btnColor= "white" 
        textColor="black" 
        activeTab={props.activeTab} 
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props: any) => (
    // <View>
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? 'black' : 'white',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
        onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{color: props.activeTab === props.text ? 'white' : 'black', fontSize: 15, fontWeight: "900"}}>{props.text}</Text>
        </TouchableOpacity>
    // </View>
);