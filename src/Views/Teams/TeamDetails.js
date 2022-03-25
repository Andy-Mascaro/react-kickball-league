
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTeamsId } from '../../services/fetchTeamsId';

export default function TeamDetails() {
  const params = useParams();
  const id = params.id;
  const [teamDetail, setTeamDetail] = useState();

  useEffect (() => {
    const fetchData = async () => {
      const data = await fetchTeamsId(id);
      setTeamDetail(data);
    };
    fetchData();
  }, [id]);

  if (!teamDetail) return <div>Batter up</div>;

  return (
    <div className="team-detail">
      <h1>Team Details</h1>
      <div key= {teamDetail.id}>
        <h2>City: {teamDetail.city}</h2>
        <h3>Name: {teamDetail.name}</h3>
        <ul>
          {teamDetail.players.map ((player) => (
            <li key= {player.id}>
              {player.name}
            </li>
          ))}
        </ul>
      </div>
         
       


      
    
    </div>
  );
}

