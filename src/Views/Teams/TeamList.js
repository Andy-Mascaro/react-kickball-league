import { useEffect, useState } from 'react/';
import { fetchTeams } from '../../services/fetchTeams';

export default function TeamList() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);
  return (
    <div className='teams'>
      <h1>Teams</h1>
      <ul>
        {teams.map((team) => {
          <div> key={team.team}</div>;
      //* need for link once have team detail *//
      // add <TeamDetail once it is done//
    
        })}

      </ul>
    
    
    
    </div>
  );
}
