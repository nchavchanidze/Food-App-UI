import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.textStyles}>Hello World</Text>
        <Icon name="close" size={30} color={colors.black} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontFamily: 'Montserrat-Medium',
    color: colors.price,
  },
});

export default App;
