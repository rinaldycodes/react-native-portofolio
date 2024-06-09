import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MobileProjectItem from './MobileProjectItem';

const DATA = [
    {
        name: 'React Native Portfolio',
        repository_link: "https://github.com/rinaldycodes/react-native-portofolio",
        description: "Build Portfolio App using react ntaive",
        images: [],
    },
];

export default function MobileProjectList() {
  return (
    <View style={[ styles.container ]}>
      <Text style={styles.title}>Mobile</Text>
      {
        DATA.map( (v,i) => {
            return (
                <MobileProjectItem key={i }
                    name={v.name}
                    description={v.description}
                    repository_link={v.repository_link}
                />
            )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15, 
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 0.3,
        marginBottom: 15,
    },
})