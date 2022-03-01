import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Download = () => {
  return (
    <div style={{height:500, width:'100%',borderTop:'5px solid grey',borderBottom:'5px solid grey',display:'flex',background:'black',color:'white',padding:'70px 45px'}}>
    
        <div style={{width:'50%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
            <img src="phone.jpg"  height="auto" width="80%" />

            <div style={{border:'2px solid grey', width:350,height:110,zIndex:10,position:'absolute',bottom:'5%',borderRadius:15,display:'flex',alignItems:'center',justifyContent:'space-between',padding:"5px 20px 5px 5px",background:'black'}}>
                <img src="boxshot.png" height="80px" width="50px" />

                <div style={{}}>
                    <p>Stranger Things</p>
                    <p style={{color:'blue'}}>Downloading...</p>
                </div>

                <ArrowDownwardIcon />
            </div>
        </div>

        <div style={{width:'50%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <h1 style={{fontSize:50}}>Download your shows <br /> to watch offline.</h1>
            <p style={{fontSize:28}}>
            Save your favorites easily and always have <br /> something to watch.
            </p>
        </div>

    </div>
  )
}

export default Download