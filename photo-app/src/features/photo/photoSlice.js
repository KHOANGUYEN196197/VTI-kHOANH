import { createSlice } from "@reduxjs/toolkit";
import { getListPhoto, postPhoto, editPhoto, deletePhoto } from "./photoThunks";

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListPhoto.fulfilled, (state, action) => {
        state.photos = action.payload;
        state.isLoading = false;
      })
      .addCase(getListPhoto.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListPhoto.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postPhoto.fulfilled, (state, action) => {
        // state.photos.push(action.payload);
        console.log('vo fulfilled');
      })
      .addCase(postPhoto.rejected, (state, action) => {
        // state.photos.push(action.payload);
        console.log('vo rejected');

      })
      .addCase(postPhoto.pending, (state, action) => {
        // state.photos.push(action.payload);
        console.log('vo pending');

      })
      .addCase(editPhoto.fulfilled, (state, action) => {
        const newPhoto = action.payload;
        const index = state.photos.findIndex(
          (photo) => photo.id === newPhoto.id
        );
        if (index >= 0) {
          state.photos[index] = newPhoto;
        }
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        const removeId = action.payload;
        state.photos = state.photos.filter((photo) => photo.id !== removeId);
      });
  },
});
const { actions, reducer } = photoSlice;
export const {} = actions;
export default reducer;
