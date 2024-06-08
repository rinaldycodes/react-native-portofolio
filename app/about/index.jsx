import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Biography from '@/src/components/Biography'

export default function page() {
  return (
    <SafeAreaView
      style={[styles.container]}
    >
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.text}>
          Hi there! I'm a passionate Fullstack Engineer driven by a deep love for crafting elegant solutions.
          With a solid foundation in Information Systems education, I thrive on transforming ideas into reality.
          Fluent in both Indonesian and English, I excel in effective communication and collaboration.
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ScrollView: {
    margin: 15
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    borderBottomWidth: 0.3,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
  },
  textHighlight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue'
  }
})