import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';

function MyDrawerItem({ label, onPress, style, isActive }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.drawerItem, style, }}>
        <Text style={[styles.drawerItemText, { color: (isActive? 'blue' : 'black')}]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MyDrawerItem;

// Gaya CSS untuk komponen
const styles = StyleSheet.create({
  drawerItem: {
    padding: 10,
  },
  drawerItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  drawerToggleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerList: {
    marginLeft: 10,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  isActive: {
    backgroundColor: '#f1f1f1',
  }
});