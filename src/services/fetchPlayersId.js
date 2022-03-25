import { client } from './client';

export async function fetchPlayersId(id) {
  const data = await client.from('players').select('*, teams (*)').match({ id }).single(); 
  return data.data;  
}

