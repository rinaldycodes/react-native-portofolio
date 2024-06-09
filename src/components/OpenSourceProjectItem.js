import { Linking, StyleSheet, Text, View, Share } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { AntDesign } from '@expo/vector-icons';


export default function OpenSourceProjectItem({
    name,
    description,
    repository_link
}) {

    const messageForShare = `Title:\n${name}\n\nDescription:\n${description}\n\nRepository Link:\n${repository_link}`;

    const onPressGithub = () => {
        Linking.openURL(repository_link)
    }
    

    const onShare = async ({
        title, message, url
    }) => {
        try {
            const shareOptions = {
                title: title ?? 'Share Title',
                message: message ?? `Share message`,
                url: url ?? 'https://google.com',
            };

            const result = await Share.share(shareOptions);
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    
    return (
        <View
            style={[styles.item]}
        >
            <View style={[styles.header]}>
                <Text
                    style={[styles.name]}
                    numberOfLines={1}
                >{name}</Text>
                <Menu>
                    <MenuTrigger style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center'}}>
                        <Entypo name="dots-three-vertical" size={14} color="black" />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={onPressGithub} style={[styles.MenuOption]}>
                            <   AntDesign name="github" size={16} color="black" />
                            <Text style={{ color: 'black' }}>Github</Text>
                        </MenuOption>
                        <MenuOption
                            onSelect={() => {
                                onShare({
                                    name,
                                    message: messageForShare,
                                    url: repository_link,
                                })
                            }}
                            style={[styles.MenuOption]}
                        >
                            <AntDesign name="sharealt" size={16} color="black" />
                            <Text style={{ color: 'black' }}>Share</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
            <View style={[styles.body]}>
                <Text>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    item: {
        marginBottom: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    MenuOption: {
        flexDirection: 'row',
        gap: 4,
    }
})