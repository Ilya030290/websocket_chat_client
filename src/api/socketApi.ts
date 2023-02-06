import ioClient, { Socket } from 'socket.io-client';

import {
  ChatCreated,
  Connect,
  CreateChat,
  DeleteChat,
  GetMessagesHistory,
  Join,
  Message,
  OutPutChats,
  OutPutMessages,
  SendMessage,
} from '../constants/constants';
import { ChatInterface, MessageInterface } from '../types/types';

export const socketApi = {
  socket: null as null | Socket,
  createConnection() {
    // @ts-ignore
    this.socket = ioClient(process.env.REACT_APP_API_URL);
  },
  onConnect(onConnectHandler: () => void) {
    this.socket?.on(Connect, onConnectHandler);
  },
  onOutPutChats(onOutPutChatsHandler: (chats: ChatInterface[]) => void) {
    this.socket?.on(OutPutChats, onOutPutChatsHandler);
  },
  onOutputMessages(onOutPutMessagesHandler: (messages: MessageInterface[]) => void) {
    this.socket?.on(OutPutMessages, onOutPutMessagesHandler);
  },
  onChatCreated(onChatCreatedHandler: (createdChat: ChatInterface) => void) {
    this.socket?.on(ChatCreated, onChatCreatedHandler);
  },
  createNewChat(chatName: string) {
    this.socket?.emit(CreateChat, chatName);
  },
  deleteChat(chat_id?: string) {
    this.socket?.emit(DeleteChat, chat_id);
  },
  joinToChat(name?: string, chat_id?: string, user_id?: string) {
    this.socket?.emit(Join, { name, chat_id, user_id });
  },
  addMessage(onMessageHandler: (message: MessageInterface) => void) {
    this.socket?.on(Message, onMessageHandler);
  },
  getMessagesHistory(chat_id?: string) {
    this.socket?.emit(GetMessagesHistory, chat_id);
  },
  sendMessage(message: string, chat_id?: string, callback?: () => void) {
    this.socket?.emit(SendMessage, message, chat_id, callback);
  },
  destroyConnection() {
    this.socket?.disconnect();
    this.socket?.off();
    this.socket = null;
  },
};
