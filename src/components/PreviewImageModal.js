import React from 'react';
import { View, Image, StyleSheet, Modal, Button, Text } from 'react-native';

const PreviewImageModal = ({ imageUrl, visible, onClose }) => {
    console.log('imageurl type', typeof imageUrl, imageUrl);

    if (typeof imageUrl == 'string') {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={onClose}
            >
                <View style={styles.container}>
                    <View style={styles.modalContent}>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Button title="Close" onPress={onClose} />
                    </View>
                </View>
            </Modal>
        );
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.modalContent}>
                    <Image source={imageUrl} style={styles.image} />
                    <Text style={{ textAlign: 'center', color: 'gray', fontWeight: '600', fontSize: 16,}} onPress={onClose} >Close</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 15,
    },
});

export default PreviewImageModal;
