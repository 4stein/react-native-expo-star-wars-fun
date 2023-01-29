import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import CharacterInfo from '../components/CharacterInfo';
import { fetchFun } from '../redux/asyncThunks';

export default function DetailsScreen({ route }) {
  const { url } = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFun(url));
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <CharacterInfo />
    </SafeAreaView>
  );
}
