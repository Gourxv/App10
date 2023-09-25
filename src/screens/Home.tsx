import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'

//React navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../App"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//component
import ProductItem from '../components/ProductItem'
import Separator from '../components/Separator'

//data
import { PRODUCTS_LIST } from '../data/constants'


type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={PRODUCTS_LIST}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Separator}
      renderItem={({item}) => (
        <Pressable onPress={() => {
            navigation.navigate('Details', {
                product: item
            })
        }}>
            <ProductItem product={item} />
        </Pressable>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        justifyContent: 'center',
        padding:12,
        backgroundColor: '#ffffff',
        
    }
})

export default Home
