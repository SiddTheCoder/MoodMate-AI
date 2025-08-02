import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { setChats, setCurrentChat, setLoading } from "./chatSlice";
import { setMessages } from "../message/messageSlice";
import { setMentalState } from "../mentalState/mentalStateSlice";

// Thunk to send message to active chat and receive AI response
export const sendMessageToActiveChat = createAsyncThunk(
  "chat/sendMessageToActiveChat",
  async (message, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.post("/chat/send-message", {
        message,
      });
      console.log("Message Sebt", response.data.data);
      console.log("Message Sebt --", response.data.data.chat.messages);
      dispatch(setCurrentChat(response.data.data.chat));
      dispatch(setMessages(response.data.data.chat.messages));
      dispatch(setMentalState(response.data.data.mentalState));
      return response.data.data; // { chat, mood }
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to send message"
      );
    }
  }
);

// Thunk to fetch all chats of the user (active and remaining)
export const getUserAllChats = createAsyncThunk(
  "chat/getUserAllChats",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.get("/chat/get-all-chats");
      const chats = response.data.data;
      console.log("Chats fetched", chats);
      dispatch(setChats(chats));
      dispatch(setMessages(chats[0].messages));
      dispatch(setCurrentChat(chats[0]));

      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch chats"
      );
    }
  }
);

export const createNewChat = createAsyncThunk(
  "chat/createNewChat",
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await axiosInstance.post("/chat/create-new-chat");
      console.log(response.data.data);
      const { chats } = getState().chat;
     const newChats = [...chats, response.data.data.chat];
      dispatch(setCurrentChat(response.data.data.chat));
      dispatch(setChats(newChats));
      dispatch(setMessages(response.data.data.chat.messages));
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create new chat"
      );
    }
  }
);

export const endCurrentChat = createAsyncThunk(
  "chat/endCurrentChat",
  async () => {
    const response = await axiosInstance.post("/chat/end-current-chat");
    return response.data.data;
  }
);
