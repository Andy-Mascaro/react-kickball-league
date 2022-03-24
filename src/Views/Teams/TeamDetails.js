import { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/fetchTeams';



export default function TeamDetails() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []); 
  return (
    <div>teams</div>
  );
}
