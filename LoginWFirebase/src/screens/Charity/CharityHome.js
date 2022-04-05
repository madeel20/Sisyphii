import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../../components/Button'
import TopBar from '../../components/TopBar'

export default function CharityHome({ navigation }) {
  return (
    <>
      <TopBar title="Home" />
      <View style={styles.container}>
        {/* <Button
          mode="contained"
          onPress={() => navigation.navigate('AddAPetForm')}
          style={{ width: 300 }}
        >
          Add a Pet
        </Button> */}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
