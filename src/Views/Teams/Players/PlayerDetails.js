import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayersId } from '../../../services/fetchPlayersId';


export default function PlayerDetails() {
  const params = useParams();
  const id = params.id;
  const [playerDetail, setPlayerDetail] = useState(null);
  
  useEffect (() => {
    const fetchData = async () => {
      const data = await fetchPlayersId(id);
      setPlayerDetail(data);
    };
    fetchData();
  }, [id]);

  if (!playerDetail) return <div>Batter Up</div>;

  return (
    <div className='player-id'>
      <h1>Super Athletes</h1>
      <div key={playerDetail.id}>
        <h2>Name: {playerDetail.name}</h2>
        <h3>Position: {playerDetail.position}</h3>
        <h2>Team: {playerDetail.teams.name}</h2>
        <ul>

          {/* {playerDetail.team((team) => (
            <li key= {team.id}>{team.name}
            </li>              
          ))} */}
        </ul>
      </div>
    </div>
  );
}
