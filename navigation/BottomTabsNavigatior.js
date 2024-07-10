import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { useTheme } from 'react-native-paper';

import ChatScreen from '../components/screens/ChatScreen';

import { COLORS } from '../constants/Colors';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabsNavigator() {
  const theme = useTheme();
  theme.colors.secondaryContainer = COLORS.LIME;
  return (
    <Tab.Navigator 
    barStyle={styles.container} 
    activeColor={COLORS.BLACK} 
    inactiveColor={COLORS.MEDIUM_GREY}>
      <Tab.Screen 
      name="Chat" 
      component={ChatScreen} 
      options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color }) => {
          return <Fontisto name="hipchat" size={26} color={color} />
        },
      }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE
  }
});