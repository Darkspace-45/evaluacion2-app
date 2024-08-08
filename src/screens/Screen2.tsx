import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../../Theme/apptheme'

export const Screen2 = () => {
  return (
    <View>
        <Text style={styles.textGlobal}>Logo Facebook</Text>
      <Image style={styles.imgGlobal} source={require('../../assets/images/facebook-icon-logo-205182.webp')} />
    </View>
  )
}

