import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";


const DATA = [
  {
    title: "อาหารจานหลัก",
    data: ["Pizza 🍕", "Burger 🍔", "Risotto 🍄"]
  },
  {
    title: "Sides",
    data: ["French Fries 🍟", "Onion Rings 🥯", "Fried Shrimps 🍤"]
  },
  {
    title: "Drinks",
    data: ["Water 🥛", "Coke 🥤", "Beer 🍺"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake 🍰", "Ice Cream 🍦"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);




 function App() {

  return(  

  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  );


}

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    flex: 1,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#fcf8ec",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
    

  },
  title: {
    fontSize: 24,

  }
});
