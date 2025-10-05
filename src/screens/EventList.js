import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const events = [
    { name: "Event Name #1" },
    { name: "Event Name #2" },
    { name: "Event Name #3" },
    { name: "Event Name #4" },
    { name: "Event Name #5" },
    { name: "Event Name #6" },
    { name: "Event Name #7" },
    { name: "Event Name #8" },
    { name: "Event Name #9" },

    // adding keys method 1
    // const clubs = [
    //   { name: "friend #1", key: "1" },
    //   { name: "friend #2", key: "2" },
    //   { name: "friend #3", key: "3" },
    //   { name: "friend #4", key: "4" },
    //   { name: "friend #5", key: "5" },
    // ];
  ];

  return (
    <FlatList
      // horizontal //Allows for a horizontal list
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name} //method 2 of adding a key prop
      data={events} // contains the array of objects
      renderItem={({ item }) => {
        // destructuring single item property
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    fontSize: 25,
  },
});

export default ListScreen;
