import BadgeList from "@/src/components/BadgeList";
import SocialMediaList from "@/src/components/SocialMediaList";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import Biography from "@/src/components/Biography";
import PreviewImageModal from "@/src/components/PreviewImageModal";
import ProfileInfo from "@/src/components/ProfileInfo";

export default function Index() {

  return (
    <SafeAreaView
      style={[styles.container]}
    >
      <ScrollView contentContainerStyle={styles.ScrollView}>
        <View style={{ marginBottom: 15, }} />
        <ProfileInfo />
        <Biography />
        <View style={[styles.containerTechnologies]}>
          <Text style={[styles.title]}>Technologies i code with</Text>
          <BadgeList />
        </View>

       
      </ScrollView>
    </SafeAreaView>
  );
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