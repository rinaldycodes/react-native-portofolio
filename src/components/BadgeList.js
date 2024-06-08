import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text } from 'react-native';

const badges = [
    { name: "TypeScript", uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/200px-Typescript_logo_2020.svg.png" },
    { name: "React Native", uri: "https://www.pngrepo.com/png/354259/180/react.png" },
    { name: "CSS3", uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png" },
    { name: "Firebase", uri: "https://www.pngrepo.com/png/303670/180/firebase-1-logo.png" },
    { name: "MongoDB", uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/200px-MongoDB_Logo.svg.png" },
    { name: "Node.js", uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/240px-Node.js_logo.svg.png" },
    { name: "Express.js", uri: "https://www.pngrepo.com/png/353724/180/express.png" },
    { name: "JavaScript", uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/200px-JavaScript-logo.png" },
    { name: "HTML5", uri: "https://www.pngrepo.com/png/349402/180/html5.png" },
    { name: "Git", uri: "https://www.pngrepo.com/png/330503/180/git.png" },
    { name: "Styled Components", uri: "https://www.pngrepo.com/png/374104/180/styled.png" },
    { name: "SQLite", uri: "https://www.pngrepo.com/png/354381/180/sqlite.png" },
    { name: "MySQL", uri: "https://www.pngrepo.com/png/306453/180/mysql.png" }
];



const BadgeList = () => {
    return (
        <ScrollView contentContainerStyle={styles.container} horizontal>
            {badges.map((badge, index) => (
                <View key={index} style={styles.badgeContainer}>
                    <Image
                        source={{ uri: badge.uri }}
                        style={styles.badge}
                        resizeMode="contain"
                        onError={(error) => console.log(`Error loading image ${badge.uri}:`, error.nativeEvent.error)}
                    />
                    <Text style={{ textAlign: 'center' }}>{badge.name}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    badgeContainer: {
        margin: 10,
        // borderWidth: 1,
        alignItems: 'center',
    },
    badge: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginBottom: 10,
    }
});

export default BadgeList;
