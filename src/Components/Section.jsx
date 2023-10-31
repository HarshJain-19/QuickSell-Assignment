import React from 'react'
import Card from './Card'
import Data from './Data'

const Section = ({head, group, reqData, avail, uid, order}) => {
  const pri = ["no priority", "low", "medium", "high", "urgent"];

  const rData = (group==="Status") ? (reqData["tickets"].filter(e => (e.status===head) ? true : false))
              : (group==='Priority') ? (reqData["tickets"].filter(e => (pri[e.priority]===head.toLowerCase()) ? true : false)) : (reqData["tickets"].filter(e => (e.userId===uid) ? true : false));
  
  return (
    <>
        <section className='sec'>
            <div className="top-sec">
              {
                group==='User' ? 
                  (<div className="user">
                      <img src={Data.icons.user} alt="" />
                      <img src={avail ? Data.icons.available : Data.icons.notAvailable} alt="" className='avail' />
                  </div>) 
                  : (<img src={Data.icons[head.toLowerCase()]} alt="" />)
              }
              {head} {rData.length}
              <div className="right">
                + <img src={Data.icons.more} alt="" />
              </div>
            </div>
            
            { 
              order === 'Priority' ? 
              (rData.sort((a,b) => b.priority-a.priority).map((e,i) => <Card group={group} info={e} reqData={reqData} key={i} pri={pri}/>)) :
              (rData.sort((a,b) => a.title > b.title ? 1 : -1).map((e,i) => <Card group={group} info={e} reqData={reqData} key={i} pri={pri}/>))
            }
        </section>
    </>
  )
}

export default Section
