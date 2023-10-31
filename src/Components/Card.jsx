import React, {useMemo} from 'react'
import Data from './Data'
import "../Styles/Card style.css"


const Card = ({group, info, reqData, pri}) => {
  const checkAvail = useMemo(() => {
      for (let i of reqData.users) {
        if (i.id===info.userId) 
          return i.available;
      }
      return false;
  }, [info.userId, reqData.users]);
  return (
    <div className='card'>
      <div className='first-line'>
        {info.id}
        {group==="User" ? "" : <div className="user">
            <img src={Data.icons.user} alt="" />
            <img src={checkAvail ? Data.icons.available : Data.icons.notAvailable} alt="" className='avail' />
        </div>}
      </div>
      <div className='second-line'>
        {group==="Status" ? "" : <img src={Data.icons[info.status.toLowerCase()]} alt="" />}
        {info.title}
      </div>
      <div className='third-line'>
        {group==="Priority" ? "" : <img src={Data.icons[pri[info.priority]]} alt="" />}
        <div className="fr">
            <div className="grey"></div>
            {info.tag[0]}
        </div>
      </div>
    </div>
  )
}

export default Card
