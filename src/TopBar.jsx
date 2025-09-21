import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,backgroundColor:"#f0f5efff"}}>
     
      <div>
        <img src="./media/ministry.png" alt="Ministry" style={{ width: '50%' }} />
      </div>

     
      <div style={{ marginRight: '35px' }}>
        <button className='mx-4 mt-5 mb-3 fs-5' style={{borderRadius:"20px"}}>
          <Link href="/about" style={{textDecoration:"none"}}>Mic Alumini</Link>
        </button>
        <button className='mx-4 mt-5 fs-5 mb-3' style={{borderRadius:"20px"}}>
          <Link href="/register" style={{textDecoration:"none"}}>Sih Login   <AccountCircleIcon /></Link>
        </button>
      </div>
      
    </div>

  );
};

export default TopBar;
