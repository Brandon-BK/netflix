import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const Dropdown = ({ title, pOne, pTwo }) => {
  return (
      <> 
        <div className='drop'>
            <p style={{fontSize:25}}>{ title }</p>

            <AddIcon />
        </div>

        <div className='hover'>
            <p>{pOne}</p>
            <p style={{marginBottom:50}}>{pTwo}</p>
        </div>
      </>
  )
}

export default Dropdown