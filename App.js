import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {copilot, walkthroughable, CopilotStep} from 'react-native-copilot';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

const WalkthroughableText = walkthroughable(Text);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20,
  },
  middleView: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabItem: {
    flex: 1,
    textAlign: 'center',
  },
});

function FeedScreen({start, navigation}) {
  useEffect(() => navigation.addListener('focus', () => start()), []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
      <CopilotStep
        text="Hi! Welcome to Feed coachmark tour!"
        order={1}
        name="openApp">
        <WalkthroughableText style={styles.title}>
          {'Welcome to Coachmarks demo'}
        </WalkthroughableText>
      </CopilotStep>
    </View>
  );
}

function NotificationsScreen({start, navigation}) {
  console.log('Notification rendered');
  useEffect(() => navigation.addListener('focus', () => start()), []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
      <CopilotStep
        text="Hi! Welcome to Notifications coachmark tour!"
        order={1}
        name="openApp">
        <WalkthroughableText style={styles.title}>
          {'Welcome to Coachmarks demo'}
        </WalkthroughableText>
      </CopilotStep>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const FeedScreenWithCopilot = copilot()(FeedScreen);
const NotificationsScreenWithCopilot = copilot()(NotificationsScreen);

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen name="Feed" options={{tabBarLabel: 'Home'}}>
        {({navigation}) => <FeedScreenWithCopilot navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Notifications" options={{tabBarLabel: 'Updates'}}>
        {({navigation}) => (
          <NotificationsScreenWithCopilot navigation={navigation} />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
}

const App = props => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
export default copilot()(App);
