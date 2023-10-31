import React from 'react'
import "../Styles/Main style.css"
import Data from './Data'
import Section from './Section'

const Main = ({group, order, reqData}) => {
  return (
    <main>
        {group!=="User" 
            ? Data[group].map((e,i) => <Section head={e} key={i} group={group} reqData={reqData} order={order} />) 
            : reqData.users.map((e,i) => <Section head={e.name} avail={e.available} key={i} group={group} reqData={reqData} uid={e.id} order={order} />)}
    </main>
  )
}

export default Main
