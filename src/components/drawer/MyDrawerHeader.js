import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';

const LOGO_URL = 'https://i.imgur.com/BbYaucd.png';

const MyDrawerHeader = ({  }) => (
	<TouchableOpacity onPress={() => router.navigate('/')}>
		<View
			style={{
				flexDirection: 'row',
				paddingLeft: 17,
        padding: 15,
				alignItems: 'center',
        borderBottomWidth: 0.3,
			}}
		>
			
			<Text style={{ color: '#000', paddingLeft: 9, fontSize: 16, fontWeight: 'bold' }}>
				Rinaldy Ramadhan
			</Text>
		</View>
	</TouchableOpacity>
);

export default MyDrawerHeader;