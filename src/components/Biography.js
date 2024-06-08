import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';

export default function Biography() {
    const handleOpenWhatsApp = () => {
        // Ganti nomor telepon dengan nomor yang ingin Anda hubungi
        const phoneNumber = '+62085161070204';
        // Ganti pesan dengan pesan yang ingin Anda kirim
        const message = 'Hello Rinaldy! Can we build something amazing together?';
        // Encode message to URI
        const encodedMessage = encodeURIComponent(message);
        const url = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
        Linking.openURL(url).then((data) => {
            console.log('WhatsApp Opened');
        }).catch(() => {
            console.log('Make sure WhatsApp is installed on your device');
        });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bio</Text>
            <Text style={styles.text}>
                Hi there! I'm a passionate Fullstack Engineer driven by a deep love for crafting elegant solutions.
                With a solid foundation in Information Systems education, I thrive on transforming ideas into reality.
                {/* Fluent in both Indonesian and English, I excel in effective communication and collaboration. */}
            </Text>
            <Text style={styles.textHighlight}
                onPress={handleOpenWhatsApp}
            >
                Let's build something amazing together!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
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
});
