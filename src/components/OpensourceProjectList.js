import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OpenSourceProjectItem from './OpenSourceProjectItem';

const DATA = [
    {
        name: 'Express.js template with auth token',
        repository_link: "https://github.com/Netizen-Teknologi/express-js-with-auth",
        description: "Express.js with auth using jsonwebtoken and database using sequalize" 
    },
    {
        name: 'Generate Avatar using JavaScript',
        repository_link: "https://github.com/Netizen-Teknologi/avatar-placeholder",
        description: "This package allows you to create avatar images dynamically based on initials or text provided." 
    },
];

export default function OpensourceProjectList() {
  return (
    <View style={[ styles.container ]}>
      <Text style={styles.title}>Opensource</Text>
      {
        DATA.map( (v,i) => {
            return (
                <OpenSourceProjectItem key={i }
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