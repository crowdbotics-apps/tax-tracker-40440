import { TextInput } from "react-native";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const EnterIntoApp = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.WoDJusol} renderItem={({
        item
      }) => <View style={styles.rqTVpKTY}></View>} ItemSeparatorComponent={() => <View style={styles.GTfhfmqI} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList><TextInput style={styles.VRTozCPk}></TextInput><View style={styles.dDcNQofj}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  WoDJusol: {
    position: "absolute",
    width: 326,
    height: 275,
    left: 14,
    top: 97
  },
  rqTVpKTY: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  GTfhfmqI: {
    backgroundColor: "#000000",
    height: 1
  },
  VRTozCPk: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 336,
    height: 71
  },
  dDcNQofj: {
    height: 60,
    width: 332,
    backgroundColor: "#16de56",
    borderRadius: 0,
    color: "#777777",
    top: 400,
    left: 0
  }
});
export default EnterIntoApp;