import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import SocialMediaList from './SocialMediaList';
import PreviewImageModal from './PreviewImageModal';

export default function ProfileInfo() {

    const [modalVisible, setModalVisible] = useState(false);
    const [imageUrl, setImageUrl] = useState(require('@/assets/images/profile.jpg'));

    const handlePreview = () => {
        // Tentukan URL gambar yang ingin ditampilkan
        // const imageUrl = 'https://example.com/image.jpg';
        setImageUrl(imageUrl);
        setModalVisible(true);
    };

    const handleClose = () => {
        setModalVisible(false);
    };
    return (
        <View style={[styles.containerProfile]}>
            <Pressable
                onPress={handlePreview}
            >
                <Image source={require('@/assets/images/profile.jpg')} style={[styles.imgProfile]} />
            </Pressable>
            <Text style={[styles.nameProfile]}>Rinaldy Ramadhan</Text>
            <Text style={[styles.jobProfile]}>Full-Stack Engineer</Text>
            <View style={styles.containerLocation}>
                <FontAwesome6 name="location-dot" size={16} color="red" />
                <Text>Bekasi | Wonosobo</Text>
            </View>
            <SocialMediaList />
            {
                modalVisible && (
                    <PreviewImageModal
                        visible={modalVisible}
                        imageUrl={imageUrl}
                        onClose={handleClose}
                    />

                )
            }
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    ScrollView: {
        marginHorizontal: 15,
    },
    containerProfile: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    imgProfile: {
        width: 177,
        height: 177,
        borderRadius: 100,
        marginBottom: 15,
    },
    nameProfile: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    jobProfile: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        borderBottomWidth: 0.3,
    },
    containerTechnologies: {
        padding: 15,
    },
    containerLocation: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 10,
    }
})