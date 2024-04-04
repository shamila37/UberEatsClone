import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import HeaderTabs from '../Components/home/HeaderTabs';
import SearchBar from '../Components/home/SearchBar';
import Categories from '../Components/home/Categories';
import RestaurantItems, { localRestaurents } from '../Components/home/RestaurantItems';
import { Divider } from 'react-native-elements';
import BottomTabs from '../Components/home/BottomTabs';
// import { SafeAreaView } from 'react-native-web';

export default function Home() {

  const [restaurantData, setRestaurantData] = React.useState([localRestaurents]);
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
        <View style={{backgroundColor: "white", padding: 15}}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <SearchBar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories/>
            <RestaurantItems />
            {/* <RestaurantItem/>
            <RestaurantItem/> */}
        </ScrollView>
        <Divider width={1}/>
        <BottomTabs/>
    </SafeAreaView>
  )
}