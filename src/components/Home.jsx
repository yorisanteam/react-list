import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <div>Home</div>
        <div>
            <p>{<Link to={'/A'}>あ行へ</Link>}</p>
            <p>{<Link to={'/KA'}>か行へ</Link>}</p>
            <p>{<Link to={'/SA'}>さ行へ</Link>}</p>
            <p>{<Link to={'/TA'}>た行へ</Link>}</p>
            <p>{<Link to={'/NA'}>な行へ</Link>}</p>
            <p>{<Link to={'/HA'}>は行へ</Link>}</p>
            <p>{<Link to={'/MA'}>ま行へ</Link>}</p>
            <p>{<Link to={'/YA'}>や行へ</Link>}</p>
            <p>{<Link to={'/RA'}>ら行へ</Link>}</p>
            <p>{<Link to={'/WA'}>わ行へ</Link>}</p>
        </div>
    </div>
  )
}

export default Home