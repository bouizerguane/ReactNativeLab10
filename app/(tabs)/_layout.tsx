import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="login"
        options={{ title: 'Login' }}
      />
      <Tabs.Screen
        name="welcome"
        options={{ title: 'Welcome' }}
      />
    </Tabs>
  );
}
