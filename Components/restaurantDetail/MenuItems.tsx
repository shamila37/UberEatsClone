import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Divider, Image } from 'react-native-elements';
// import Ionicons from "react-native-vector-icons/Ionicons";


const foods =[
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off th sizzles",
        price: "$19.20",
        image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
    },
    {
        title: "Chilaqiles",
        description: "Chilaqiles with cheese and sause. A delicious mexican dish",
        price: "$14.50",
        image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off th sizzles",
        price: "$19.20",
        image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
    },
    {
        title: "Chilaqiles",
        description: "Chilaqiles with cheese and sause. A delicious mexican dish",
        price: "$14.50",
        image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off th sizzles",
        price: "$19.20",
        image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
    },
    {
        title: "Chilaqiles",
        description: "Chilaqiles with cheese and sause. A delicious mexican dish",
        price: "$14.50",
        image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off th sizzles",
        price: "$19.20",
        image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
    },
    {
        title: "Chilaqiles",
        description: "Chilaqiles with cheese and sause. A delicious mexican dish",
        price: "$14.50",
        image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food, index) => (
        <View key={index}>
            <View style={styles.menuItemStyle}>
                <FoodInfo food={food} />
                <FoodImage food={food} />
            </View>
            <Divider width={0.5} orientation='vertical'/>
        </View>
    ))} 
    </ScrollView>
  );
}

const FoodInfo = (props: { food: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }) => (
    <View style={{width: 240, justifyContent: "space-between"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props: { food: { image: any; }; }) => (
    <View>
        <Image
            source={{uri: props.food.image}}
            style={{width: 100, height: 100, borderRadius: 8}}
        />
    </View>
);