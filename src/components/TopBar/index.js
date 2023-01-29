import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { clearFun, selectList } from '../../redux/reducers/listReducer';

const TopBar = () => {
  const { females, males, others } = useSelector(selectList);
  const dispatch = useDispatch();

  const clearFunHandler = () => {
    dispatch(clearFun());
  };

  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.button}
          className="border border-red-400 hover:border-slate-400"
          onPress={clearFunHandler}
        >
          <Text style={styles.text}>Clear fans</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView className="flex-row justify-between gap-x-2 p-2">
        <View className="flex-1 border border-gray-400 h-32 justify-center items-center">
          <Text>{females}</Text>
          <Text>Female Fans</Text>
        </View>
        <View className="flex-1 border border-gray-400 h-32 justify-center items-center">
          <Text>{males}</Text>
          <Text>Male Fans</Text>
        </View>
        <View className="flex-1 border border-gray-400 h-32 justify-center items-center">
          <Text>{others}</Text>
          <Text>Others</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'red',
  },
});

export default TopBar;
