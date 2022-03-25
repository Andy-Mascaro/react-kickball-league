import { useEffect, useState } from 'react';
import { fetchPlayers } from '../../../services/fetchPlayers';
import { Link } from 'react-router-dom';

export default function PlayerList() {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayer(data);
    };
    fetchData();
  }, []); 
  return (
    <div className='player'>
      <h1>League Players</h1>
      {player.map((info) => (
        <div key={info.info}>
          <Link exact to={`/players/${info.id}`}>{info.name}</Link>
        </div>

      ))}


    </div>
  );
}
