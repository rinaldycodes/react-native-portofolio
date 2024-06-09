import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View, Text } from 'react-native';
import MyDrawerCustom from '../src/components/drawer/MyDrawerCustom';
import {
  MenuProvider,
} from 'react-native-popup-menu';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MenuProvider>
        <Drawer drawerContent={props => <MyDrawerCustom  {...props} />} >
          <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: 'Home',
              title: 'Home',
            }}
          />

          <Drawer.Screen
            name="about" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: 'About',
              title: 'About',
            }}
          />
          <Drawer.Screen
            name="projects" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: 'Projects',
              title: 'Projects',
            }}
          />

        </Drawer>
      </MenuProvider>
    </GestureHandlerRootView >
  );
}
