import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

//react navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../App"

type DetailsProps = NativeStackScreenProps<RootStackPramList, "Details">


const Details = ({route}: DetailsProps) => {
    const {product} = route.params
  return (
    <ScrollView style={styles.container}>
        <View>
         <Image style={styles.image} source={{uri: product.imageUrl}} />
         <View>
        <Text style={styles.name}>{product.name}</Text>

        <Text style={styles.description}>{product.description}</Text>
        
        <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
                <Text style={styles.ratingText}>{product.rating} ★</Text>
        </View>
        <Text style={styles.ratingCount}>
            ({product.ratingCount.toLocaleString()}) 
        </Text>
        </View>

        <View style={[styles.priceContainer, styles.priceContainer]}>
        <Text style={styles.originalPrice}>
            ₹{product.originalPrice.toLocaleString()}
        </Text>
        
        <Text style={styles.discountPrice}>
           ₹{product.discountPrice.toLocaleString()}
        </Text>
        <Text style={styles.offerPercentage}>
            {product.offerPercentage}% off
            </Text>
        </View>
        {product.tags.map((tag, index) => (
            <View key={index} style={styles.badge}>
                <Text style={styles.tagBadge}>{tag}</Text>
            </View>
        ))}
        </View>
       </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        backgroundColor: '#ffffff',
      },
      image: {
        width: 300,
        height: 450,
        resizeMode: 'contain',
      },
      rowContainer: {
        flexDirection: 'row',
      },
      name: {
        marginBottom: 4,
    
        fontSize: 30,
        fontWeight: '700',
      },
      description:{
        marginBottom:3,
        fontSize: 20,
        fontWeight: '400',

      },
      ratingContainer: {
        marginVertical: 1,
      },
      priceContainer: {
        marginVertical: 12,
        paddingHorizontal: 12,
        marginBottom:12,
        borderRadius:6,

      },
      rating: {
        borderRadius: 4,
        paddingHorizontal: 8,
        justifyContent: 'center',
        backgroundColor: '#008c00',
    
        marginRight: 4,
      },
      ratingText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
      },
      ratingCount: {
        color: '#878787',
      },
      originalPrice: {
        fontSize: 18,
        marginRight: 4,
        fontWeight: '600',
    
        color: 'rgba(0, 0, 0, 0.5)',
        textDecorationLine: 'line-through',
      },
      discountPrice: {
        fontSize: 18,
        marginRight: 4,
        fontWeight: '600',
    
        color: '#000000',
      },
      offerPercentage: {
        fontSize: 17,
        fontWeight: '600',
        color: '#4bb550',
      },
      badge:{
        margin: 2,
        flexWrap: 'wrap',
        flexDirection: 'row',
      },
      tagBadge: {
        paddingVertical: 2,
    paddingHorizontal: 4,

    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.5)',

    color: 'rgba(0, 0, 0, 0.8)',
      },
})

export default Details

