import React, { useEffect, useState, useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Button from '../components/Button'
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import TextInput from '../components/TextInput'

export default function RescueAnimalForm({ navigation }) {
  const [state, setState] = useState([])
  const [namet, setName] = useState('')
  const dbRef = firebase.firestore().collection('test')
  useEffect(() => {
    dbRef.onSnapshot(getCollectionData)
  }, [])

  const getCollectionData = (snap) => {
    const testArr = []
    snap.forEach((res) => {
      const { name } = res.data()
      console.log('name', name)
      testArr.push({ key: res.id, name })
    })
    setState(testArr)
  }

  // create
  const saveName = () => {
    dbRef.add({ name: namet }).then((res) => console.log('res'))
  }
// only deletes last item
  const deteleName = () => {
    const delItem = dbRef.doc(state[0].key)
    console.log('del', delItem)
    delItem.delete().then(() => {
      console.log('deletetetetet')
    })
  }
//only first one
  const editName = () => {
    const editItem = dbRef.doc(state[0].key)
    console.log('edit', editItem)
    editItem.set({name: "thibia"}).then(() => {
      console.log('deletetetetet')
    })
  }

  return (
    <>
      <Header>Firestore TEst</Header>
      {state.map((item) => (
        <Header>{item.name}</Header>
      ))}
      <TextInput
        label="Email"
        returnKeyType="next"
        onChangeText={(text) => setName(text)}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Header>{namet}</Header>
      <Button mode="outlined" onPress={() => saveName()}>
        Save
      </Button>
      <Button mode="outlined" onPress={() => deteleName()}>
        Delete
      </Button>
      <Button mode="outlined" onPress={() => editName()}>
        Edit
      </Button>
      <Button mode="outlined" onPress={() => firebase.auth().signOut()}>
        Sign Out
      </Button>
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
