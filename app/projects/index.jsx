import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OpensourceProjectList from '@/src/components/OpensourceProjectList'
import MobileProjectList from '@/src/components/MobileProject/MobileProjectList'

export default function index() {
  return (
    <SafeAreaView
        style={[ styles.container ]}
    >
        <MobileProjectList />
        <OpensourceProjectList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})