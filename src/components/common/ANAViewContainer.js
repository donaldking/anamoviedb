import React from 'react'
import { View } from 'react-native';

const ANAViewContainer = (props) => {
  return (
    <View style={styles.viewContainerStyle}>
      {props.children}
    </View>
  )
}
const styles = {
  viewContainerStyle: {
    backgroundColor: '#ffffff',
    flex: 1
  }
}
export { ANAViewContainer };
