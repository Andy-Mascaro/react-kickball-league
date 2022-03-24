import React from 'react';
import { useEffect, useState } from 'react/cjs/react.production.min';
import { fetchTeams } from '../../services/fetchTeams';

export default function Teams() {
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
    
    
    
    Teams</div>
  );
}



    
  
