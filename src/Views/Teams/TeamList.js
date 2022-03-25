import { useEffect, useState } from 'react/';
import { fetchTeams } from '../../services/fetchTeams';
import { Link } from 'react-router-dom';

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
        {teams.map((team) => (
          <div key={team.team}>
            <Link exact to={`/teams/${team.id}`}>{team.name}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
