import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.production.min';
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
  return (
    <div className="team-detail">
      <h1>Team Details</h1>
      <ul>
        {teamDetail.map((data) => {
          <div>key={data.data}</div>;
        })}


      </ul>
    
    </div>
  );
}

