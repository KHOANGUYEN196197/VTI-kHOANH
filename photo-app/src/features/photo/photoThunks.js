import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { photoAPIUrl } from "config/apiConfig";

export const getListPhoto = createAsyncThunk(
  "getListPhoto",
  async (_, { getState }) => {
    const { photos } = getState().photoReducer;
    if (photos.length === 0) {
      try {
        const response = await axios.get(photoAPIUrl);
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    } else {
      return photos;
    }
  }
);
export const postPhoto = createAsyncThunk("postPhoto", async (data) => {
  try {
    const response = await axios.post(photoAPIUrl, data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export const editPhoto = createAsyncThunk("editPhoto", async (data) => {
  try {
    const response = await axios.put(`${photoAPIUrl}${data.id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export const deletePhoto = createAsyncThunk("deletePhoto", async (id) => {
  try {
    const response = await axios.delete(`${photoAPIUrl}${id}`);
    return response.data.id;
  } catch (error) {
    throw new Error(error.message);
  }
});
