import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements';


const image = "https://wallpapers.com/images/high/al-fresco-restaurant-in-piazza-dei-signori-8iwhkfq54vjav6kw.webp";
const title = 'Farmhouse Kitchen Thai Cusine'
const description = 'Thai . Comfort Food . $$ . 4 stars (2913+)';

export default function About() {
  return (
    <View>
      <RestaurantImage image={image}/>
      <RestaurantTitle title={title}/>
      <RestaurantDescription description={description}/>
    </View>
  );
}

const RestaurantImage = (props: { image: any; }) => (
    <Image source={{uri: props.image}} style={{width: "100%", height: 180}} />
);

const RestaurantTitle = (props: any) => (
    <Text style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    }}
    >
    {props.title}
    </Text>
);

const RestaurantDescription = (props: any) => (
    <Text style={{
        fontSize: 15.5,
        fontWeight: "400",
        marginTop: 10,
        marginHorizontal: 10,
    }}
    >
    {props.description}
    </Text>
);