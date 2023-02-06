import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { socketApi } from '../api/socketApi';
import { setIsOnline } from './authReducer';
import {
  AddMessage,
  AddNewChat,
  AppReducer,
  CreateConnection,
  CreateNewChat,
  DeleteChatById,
  DestroyConnection,
  FetchChats,
  FetchMessages,
  FetchMessagesHistory,
  JoinToChat,
  SendNewMessage,
  SUCCESS,
} from '../constants/constants';
import {
  AppReducerState,
  AppRootStateType,
  ChatInterface,
  LoadingStatusType,
  MessageInterface,
} from '../types/types';

const initialState: AppReducerState = {
  chat: {
    name: '',
  },
  chats: [] as ChatInterface[],
  message: {
    name: '',
    text: '',
  },
  messages: [] as MessageInterface[],
  loadingStatus: SUCCESS,
};

export const slice = createSlice({
  name: AppReducer,
  initialState,
  reducers: {
    setChat: (state, action: PayloadAction<string>) => {
      state.chat.name = action.payload;
    },
    setChats: (state, action: PayloadAction<ChatInterface[]>) => {
      state.chats = action.payload;
    },
    addChatToStore: (state, action: PayloadAction<ChatInterface>) => {
      state.chats.push(action.payload);
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message.text = action.payload;
    },
    setMessages: (state, action: PayloadAction<MessageInterface[]>) => {
      state.messages = action.payload;
    },
    addMessageToStore: (state, action: PayloadAction<MessageInterface>) => {
      state.messages.push(action.payload);
    },
    setLoadingStatus: (state, action: PayloadAction<LoadingStatusType>) => {
      state.loadingStatus = action.payload;
    },
  },
});

export const appReducer = slice.reducer;

export const {
  setChat,
  setChats,
  addChatToStore,
  setMessage,
  addMessageToStore,
  setMessages,
  setLoadingStatus,
} = slice.actions;

export const createConnection = createAsyncThunk(CreateConnection, (param, thunkAPI) => {
  socketApi.createConnection();
  socketApi.onConnect(() => {
    thunkAPI.dispatch(setIsOnline(true));
  });
});

export const destroyConnection = createAsyncThunk(
  DestroyConnection,
  (params, thunkAPI) => {
    socketApi.destroyConnection();
    thunkAPI.dispatch(setIsOnline(false));
    thunkAPI.dispatch(setMessages([]));
  }
);

export const fetchChats = createAsyncThunk(FetchChats, (param, thunkAPI) => {
  socketApi.onOutPutChats((chats: ChatInterface[]) => {
    thunkAPI.dispatch(setChats(chats));
  });
});

export const onCreatedChat = createAsyncThunk(CreateNewChat, (param, thunkAPI) => {
  socketApi.onChatCreated((createdChat: ChatInterface) => {
    thunkAPI.dispatch(addChatToStore(createdChat));
  });
});

export const addNewChat = createAsyncThunk(
  AddNewChat,
  (newChatName: string, thunkAPI) => {
    socketApi.createNewChat(newChatName);
    thunkAPI.dispatch(setChat(''));
  }
);

export const deleteChat = createAsyncThunk(DeleteChatById, (chat_id?: string) => {
  socketApi.deleteChat(chat_id);
});

export const joinToChat = createAsyncThunk(
  JoinToChat,
  (params: { name?: string; chat_id?: string; user_id?: string }) => {
    const { name, chat_id, user_id } = params;

    socketApi.joinToChat(name, chat_id, user_id);
  }
);

export const addMessage = createAsyncThunk(AddMessage, (param, thunkAPI) => {
  socketApi.addMessage((message: MessageInterface) => {
    thunkAPI.dispatch(addMessageToStore(message));
  });
});

export const getMessagesHistory = createAsyncThunk(
  FetchMessagesHistory,
  (chat_id?: string) => {
    socketApi.getMessagesHistory(chat_id);
  }
);

export const fetchMessages = createAsyncThunk(FetchMessages, (param, thunkAPI) => {
  socketApi.onOutputMessages((messages: MessageInterface[]) => {
    thunkAPI.dispatch(setMessages(messages));
  });
});

export const sendNewMessage = createAsyncThunk(
  SendNewMessage,
  (params: { message: string; chat_id?: string; callback?: () => void }) => {
    const { message, chat_id, callback } = params;

    socketApi.sendMessage(message, chat_id, callback);
  }
);

const getChat = (state: AppRootStateType): ChatInterface => state.app.chat;

export const selectChat = createSelector(getChat, (chat: ChatInterface) => chat);

const getChats = (state: AppRootStateType): ChatInterface[] => state.app.chats;

export const selectChats = createSelector(getChats, (chats: ChatInterface[]) => chats);

const getMessage = (state: AppRootStateType): MessageInterface => state.app.message;

export const selectMessage = createSelector(
  getMessage,
  (message: MessageInterface) => message
);

const getMessages = (state: AppRootStateType): MessageInterface[] => state.app.messages;

export const selectMessages = createSelector(
  getMessages,
  (messages: MessageInterface[]) => messages
);

const getLoadingStatus = (state: AppRootStateType): LoadingStatusType =>
  state.app.loadingStatus;

export const selectLoadingStatus = createSelector(
  getLoadingStatus,
  (loadingStatus: LoadingStatusType) => loadingStatus
);
