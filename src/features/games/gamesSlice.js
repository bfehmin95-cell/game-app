import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import api from "../../services/api";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",

  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/photos?_limit=8");

      const names = [
        "Fortnite",
        "PUBG",
        "Dota 2",
        "CS-GO",
        "Mini Craft",
        "Eagles Fly",
        "Warface",
        "Warcraft",
      ];

      const categories = [
        "Sandbox",
        "Battle S",
        "Steam-X",
        "Legendary",
        "Legendary",
        "Mighty Games",
        "Max 3D",
        "Legend",
      ];

      const images = [
        "/images/fortnite.jpg",
        "/images/pubg.jpg",
        "/images/dota.jpg",
        "/images/csgo.jpg",
        "/images/minecraft.jpg",
        "/images/eagles.jpg",
        "/images/warface.jpg",
        "/images/warcraft.jpg",
      ];

      const games = response.data.map((item, index) => ({
        id: item.id,
        name: names[index],
        category: categories[index],
        image: images[index],
      }));

      return games;

    } catch (error) {
      return rejectWithValue(
        error.message || "Oyunları yükləmək mümkün olmadı."
      );
    }
  }
);

const initialState = {
  games: [],
  loading: false,
  error: null,
   searchTerm: "",
};

const gamesSlice = createSlice({
  name: "games",

  initialState,

  reducers: {
  setSearchTerm: (state, action) => {
    state.searchTerm = action.payload;
  },
},

  extraReducers: (builder) => {
    builder

      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload;
      })

      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Xəta baş verdi.";
      });
  },
});

export const { setSearchTerm } = gamesSlice.actions;

export default gamesSlice.reducer;