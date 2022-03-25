import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <NavLink exact to= '/'>Home</NavLink>
      <NavLink exact to='/teams'>Teams</NavLink>
      <NavLink exact to='/players'>Players</NavLink>
    </div>
  );
}
