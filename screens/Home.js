import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import HeaderTabs from '../Components/HeaderTabs';
import SearchBar from '../Components/SearchBar';
import Categories from '../Components/Categories';
import RestaurantItem from '../Components/RestaurantItem';
// import { SafeAreaView } from 'react-native-web';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
        <View style={{backgroundColor: "white", padding: 15}}>
            <HeaderTabs/>
            <SearchBar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories/>
            <RestaurantItem/>
            {/* <RestaurantItem/>
            <RestaurantItem/> */}
        </ScrollView>
    </SafeAreaView>
  )
}