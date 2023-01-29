import React from 'react';
import { View, Text } from 'react-native';

const Cell = ({ data }) => {
  const { name, birth_year, gender, homeworld, species } = data;
  return (
    <>
      <View className="flex-1 mr-2">
        <Text className="font-bold text-[11px]">{name}</Text>
      </View>
      <View className="flex-1 mr-2">
        <Text className="text-[11px]">{birth_year}</Text>
      </View>
      <View className="flex-1 mr-2">
        <Text className="text-[11px]">{gender}</Text>
      </View>
      <View className="flex-1 mr-2">
        <Text className="text-[11px]">{homeworld}</Text>
      </View>

      <View className="flex-1">
        {species[0] && <Text className="text-[11px]">{species}</Text>}
      </View>
    </>
  );
};

export default Cell;
