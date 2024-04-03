import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Categories from './Categories';



const localRestaurents = [
    {
        name: "Beachside Bar",
        image_url: "https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url: "https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "Beachside Bar",
        image_url: "https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    
];

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
        {localRestaurents.map((restaurent, index) => (
            <View style={{
                marginTop: 10, 
                padding: 15, 
                backgroundColor: "white"
                }}>
              {/* restaurent image */}
              <RestaurantImage/>
              {/* restaurent info */}
              <RestaurantInfo/>
            </View>
        ))}
    
    </TouchableOpacity>
  );
  }

  const RestaurantImage = () => (
    <>
    <Image source={{
        uri: "https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg"
    }}
    style={{width: "100%", height: 180}}
    />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'/>
    </TouchableOpacity>
    </>
    );

    const RestaurantInfo = () => (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between", 
            alignItems: "center",
            marginTop: 10,
            }}>
            <View>
                <Text style={{fontSize: 15, fontWeight: "bold"}}>Farmhouse Kitchen Thai Cuisine</Text>
                <Text style={{fontSize: 13, color: "gray"}}>30-45 . min</Text>
            </View>
            <View style={{
                backgroundColor: "#eee", 
                height: 30, 
                width: 30, 
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                }}>
                <Text>4.5</Text>
            </View>
        </View>
    )
