import { Client , Databases , Account } from 'appwrite';

export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID
export const COLLECTION_ID_MESSAGES = import.meta.env.VITE_COLLECTION_ID_MESSAGES 
export const API_ENDPOINT =  import.meta.env.VITE_API_ENDPOINT

const client = new Client()
    .setProject(PROJECT_ID)
    .setEndpoint(API_ENDPOINT);

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
