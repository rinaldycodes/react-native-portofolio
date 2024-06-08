import React from 'react';
import { View, Image, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';

const SocialMediaList = ({  }) => {
    const socialMediaBadges = [
        // { name: "Facebook", uri: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
        // { name: "Twitter", uri: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" },
        { name: "Instagram", uri: "https://www.pngrepo.com/png/111199/180/instagram.png", link: 'https://www.instagram.com/rinaldy.dev/' },
        { name: "LinkedIn", uri: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", link: ''},
        { name: "YouTube", uri: "https://www.pngrepo.com/png/77415/180/youtube.png", link: '' },
        { name: "GitHub", uri: "https://www.pngrepo.com/png/341847/180/github.png", link: 'https://github.com/rinaldycodes' },
        // { name: "Reddit", uri: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Reddit_logo_and_wordmark.svg/1200px-Reddit_logo_and_wordmark.svg.png" },
        // { name: "Pinterest", uri: "https://upload.wikimedia.org/wikipedia/commons/3/36/Pinterest_Shiny_Icon.svg" },
        // { name: "Snapchat", uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Snapchat_logo.svg/240px-Snapchat_logo.svg.png" },
        // { name: "Twitch", uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Twitch_logo.svg/240px-Twitch_logo.svg.png" },
        // { name: "WhatsApp", uri: "https://www.pngrepo.com/png/158412/180/whatsapp.png" },
        // { name: "Telegram", uri: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" },
        // { name: "Discord", uri: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Font_Awesome_5_brands_discord.svg" }
      ];

      const handleOpenLink = (link) => {
        if ( link ) {
            Linking.openURL(link)
        }
      }
      
  return (
    <ScrollView contentContainerStyle={styles.container} horizontal>
      {socialMediaBadges.map((badge, index) => (
        <Pressable key={index} style={styles.badgeContainer}
            onPress={() => {
                handleOpenLink(badge.link)
            }}
        >
          <Image
            source={{ uri: badge.uri }}
            style={styles.badge}
            resizeMode="contain"
          />
        </Pressable>
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
    margin: 5,
  },
  badge: {
    width: 30,
    height: 30,
  },
});

export default SocialMediaList;
