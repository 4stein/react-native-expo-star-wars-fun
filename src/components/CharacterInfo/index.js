import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectList } from '../../redux/reducers/listReducer';

const CharacterInfo = () => {
  const { funInfo } = useSelector(selectList);

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    homeworld,
    species,
  } = funInfo;

  return (
    <>
      <View className="flex-row">
        <Text className="font-bold">Name: </Text>
        <Text>{name}</Text>
      </View>
      <View className="flex-row">
        <Text className="font-bold">Birth year: </Text>
        <Text>{birth_year}</Text>
      </View>
      <View className="flex-row">
        <Text className="font-bold">Height: </Text>
        <Text>{height}</Text>
      </View>
      <View className="flex-row">
        <Text className="font-bold">Mass: </Text>
        <Text>{mass}</Text>
      </View>
      <View className="flex-row">
        <Text className="font-bold">Hair color: </Text>
        <Text>{hair_color}</Text>
      </View>
      <View className="flex-row">
        <Text className="font-bold">Eye color: </Text>
        <Text>{eye_color}</Text>
      </View>
      <View className="flex-row">
        <Text className="font-bold">Skin color: </Text>
        <Text>{skin_color}</Text>
      </View>
      <View className="flex-row">
        <Text className="font-bold">Homeworld: </Text>
        <Text>{homeworld}</Text>
      </View>

      {species && species[0] && (
        <View className="flex-row">
          <Text className="font-bold">Species: </Text>
          <Text>{species}</Text>
        </View>
      )}
    </>
  );
};

export default CharacterInfo;
