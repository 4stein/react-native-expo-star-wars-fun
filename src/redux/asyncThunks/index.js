import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProfiles = createAsyncThunk(
  'list/fetchProfiles',
  async () => {
    try {
      const res = await axios.get('https://swapi.dev/api/people');
      const data = await res.data.results;
      const payload = await Promise.all(
        data.map(async profile => {
          let { name, birth_year, gender, homeworld, species, created, url } =
            profile;
          const homeworldRes = await axios.get(homeworld);
          const homeworldData = await homeworldRes.data;
          if (species.length) {
            const speciesRes = await axios.get(species[0]);
            const speciesData = await speciesRes.data;
            species = speciesData.name;
          }
          return {
            name,
            birth_year,
            gender,
            homeworld: homeworldData.name,
            species,
            created,
            url,
          };
        })
      );

      return payload;
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchFun = createAsyncThunk('list/fetchFun', async url => {
  try {
    const res = await axios.get(url);
    const { data } = await res;

    let {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      homeworld,
      species,
    } = data;

    const homeworldRes = await axios.get(homeworld);
    const homeworldData = await homeworldRes.data;
    homeworld = homeworldData.name;

    if (species.length) {
      const speciesRes = await axios.get(species[0]);
      const speciesData = await speciesRes.data;
      species = speciesData.name;
    }

    const payload = {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      homeworld,
      species,
    };

    return payload;
  } catch (e) {
    console.log(e);
  }
});
