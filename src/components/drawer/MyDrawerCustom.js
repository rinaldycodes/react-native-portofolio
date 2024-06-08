import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import MyDrawerHeader from './MyDrawerHeader'
import MyDrawerItem from './MyDrawerItem'
import { router, useSegments } from 'expo-router'

export default function MyDrawerCustom() {
  const segments = useSegments();
  const firstSegment = segments[0];
  // console.log('segments', segments);
  // console.log('firstSegment', firstSegment);

  
  return (
    <DrawerContentScrollView>
      <MyDrawerHeader />
      <MyDrawerItem 
        label={'Home'} 
        onPress={() => { router.push('/') }} 
        isActive={firstSegment === undefined ? 1 : 0} 
      />
      <MyDrawerItem 
        label={'About'} 
        onPress={() => { router.push('/about') }} 
        isActive={firstSegment === 'about' ? 1 : 0} 
      />
    </DrawerContentScrollView>
  )
}