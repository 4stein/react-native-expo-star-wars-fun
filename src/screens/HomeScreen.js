import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '../components/Table';
import TopBar from '../components/TopBar';
import { fetchProfiles } from '../redux/asyncThunks';
import { selectList } from '../redux/reducers/listReducer';

const HomeScreen = ({ navigation }) => {
  const { profiles } = useSelector(selectList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);

  return (
    <ScrollView>
      <TopBar />
      <Table navigation={navigation} data={profiles} />
    </ScrollView>
  );
};

export default HomeScreen;
