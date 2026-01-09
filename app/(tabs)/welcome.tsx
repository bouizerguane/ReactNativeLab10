import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Application</Text>

      <Text style={styles.text}>
        This screen is used to test the navigation between different tabs
        using Expo Router.
      </Text>

      <Text style={styles.text}>
        The bottom tab bar allows quick access to the main sections
        of the application without reloading the interface.
      </Text>

      <Text style={styles.text}>
        You can freely switch between the Login and Welcome tabs
        to verify that the navigation works correctly.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#111827',
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
    color: '#374151',
    lineHeight: 22,
  },
});
