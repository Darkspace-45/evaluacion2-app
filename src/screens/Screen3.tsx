import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../../Theme/apptheme'

export const Screen3 = () => {
  return (
    <View>
        <Text style={styles.textGlobal}>Logo Instagram</Text>
        <Image style={styles.imgGlobal} source={require('../../assets/images/Instagram-Logo.png')} />
    </View>
  )
}
