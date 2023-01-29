import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Cell from '../Cell';
import { HeartIcon } from 'react-native-heroicons/solid';
import { HeartIcon as HeartIconOutline } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFun,
  removeFun,
  selectList,
} from '../../../redux/reducers/listReducer';

const Row = ({ navigation, column }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { clearAll } = useSelector(selectList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (clearAll === true) {
      setIsClicked(false);
    }
  }, [clearAll]);

  const removeFunHandler = () => {
    dispatch(removeFun(column.gender));
    setIsClicked(!isClicked);
  };

  const addFunHandler = () => {
    dispatch(addFun(column.gender));
    setIsClicked(!isClicked);
  };

  return (
    <TouchableOpacity
      className="flex flex-row items-center justify-space-around border-b border-gray-400"
      onPress={() =>
        navigation.push('Details', {
          url: column.url,
        })
      }
    >
      <View className="flex-1 m-4 mr-0">
        {isClicked ? (
          <HeartIcon size={32} color="red" onPress={removeFunHandler} />
        ) : (
          <HeartIconOutline size={32} color="red" onPress={addFunHandler} />
        )}
      </View>

      <Cell data={column} />
    </TouchableOpacity>
  );
};

export default Row;
