import React from 'react';
import { SafeAreaView } from 'react-native';

const ANASafeAreaView = (props) => {
  return (
    <SafeAreaView
      forceInset={{ top: 'always' }}
      style={styles.safeAreaViewStyles}>
    {props.children}
    </SafeAreaView>
  )
}
const styles = {
  safeAreaViewStyles: {
    backgroundColor: '#ffffff',
    flex: 1
  }
}
export { ANASafeAreaView };
