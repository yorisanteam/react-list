import React from 'react';
import Button from '@mui/material/Button';


function Sidebar(props) {

  return (
      <div>
        <Button variant="contained" href="/A">あ行へ</Button>
        <Button variant="contained" href="/KA">か行へ</Button>
        <Button variant="contained" href="/SA">さ行へ</Button>
        <Button variant="contained" href="/TA">た行へ</Button>
        <Button variant="contained" href="/NA">な行へ</Button>
        <Button variant="contained" href="/HA">は行へ</Button>
        <Button variant="contained" href="/MA">ま行へ</Button>
        <Button variant="contained" href="/YA">や行へ</Button>
        <Button variant="contained" href="/RA">ら行へ</Button>
        <Button variant="contained" href="/WA">わ行へ</Button>
        <Button variant="contained" href="/">HOMEへ</Button>
    </div>
  )
}



export default Sidebar