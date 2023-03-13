import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
        <nav className='navbar  float-left'>
          <ul>
            <li>
              <Link to={`/`}>Domů</Link>
            </li>
            <li>
              <Link to={`/projects`}>Projekty</Link>
            </li>
            <li>
              <Link to={`/contact`}>Kontakt</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
