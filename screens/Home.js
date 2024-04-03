import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import HeaderTabs from '../Components/HeaderTabs';
import SearchBar from '../Components/SearchBar';
import Categories from '../Components/Categories';
// import { SafeAreaView } from 'react-native-web';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
        <View style={{backgroundColor: "white", padding: 15}}>
            <HeaderTabs/>
            <SearchBar/>
        </View>
        <Categories/>
    </SafeAreaView>
  )
}