import { client } from './client';

export async function fetchTeamsId(id) {
  const data = await client.from('teams').select('*, players (*)').match({ id }).single();
  console.log(data);
  return data.data;
}
