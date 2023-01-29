import React from 'react';
import { View, Text } from 'react-native';
import Row from '../Row';

const Grid = ({ navigation, data }) => {
  if (data && data.length) {
    return (
      <View>
        <View className="flex flex-row items-center justify-space-around border border-gray-400">
          <View className="flex-1 m-4 mr-0"></View>
          <View className="flex-1 mr-2">
            <Text className="font-bold text-[11px]">Name</Text>
          </View>
          <View className="flex-1 mr-2">
            <Text className="font-bold text-[11px]">Birth Year</Text>
          </View>
          <View className="flex-1 mr-2">
            <Text className="font-bold text-[11px]">Gender</Text>
          </View>
          <View className="flex-1 mr-2">
            <Text className="font-bold text-[11px]">Home World</Text>
          </View>

          <View className="flex-1">
            <Text className="font-bold text-[11px]">Species</Text>
          </View>
        </View>
        {data.map(column => (
          <Row key={column.created} navigation={navigation} column={column} />
        ))}
      </View>
    );
  }
};

export default Grid;
