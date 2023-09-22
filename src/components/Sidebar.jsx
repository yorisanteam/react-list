import React from 'react';
import Button from '@mui/material/Button';


function Sidebar() {

  return (
      <div className='Sidebar'>
        <Button variant="contained" sx={{padding:"2px",minWidth:"40px"}}  href="/A/">あ行</Button>
        <Button variant="contained" sx={{padding:"2px",minWidth:"40px"}} href="/KA/">か行</Button>
        <Button variant="contained" sx={{padding:"2px",minWidth:"40px"}} href="/SA/">さ行</Button>
        <Button variant="contained" sx={{padding:"2px",minWidth:"40px"}} href="/TA/">た行</Button>
        <Button variant="contained" sx={{padding:"2px",minWidth:"40px"}} href="/NA/">な行</Button>
        <Button variant="contained" sx={{padding:"2px",minWidth:"40px"}} href="/HA/">は行</Button>
        <Button variant="contained" sx={{padding:"2px",minWidth:"40px"}} href="/MA/">ま行</Button>
        <Button variant="contained" sx={{padding:"2px",minWidth:"40px"}} href="/YA/">や行</Button>
        <Button variant="contained" sx={{padding:"2px",minWidth:"40px"}} href="/RA/">ら行</Button>
        <Button variant="contained" sx={{padding:"2px",minWidth:"40px"}} href="/WA/">わ行</Button>
        <Button variant="contained" sx={{padding:"2px",minWidth:"40px"}} href="/Shelf/">棚</Button>
        <Button variant="contained" sx={{padding:"2px",minWidth:"50px"}} href="/">HOME</Button>
    </div>
  )
}



export default Sidebar