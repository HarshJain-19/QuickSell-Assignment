import React, { useState, useEffect } from 'react'
import "./Styles/App style.css"
import Nav from './Components/Nav'
import Main from './Components/Main'
import axios from "axios"

const App = () => {
  const [group, setGroup] = useState(localStorage.getItem("group")===null ? "Status" : localStorage.getItem("group"));
  const [order, setOrder] = useState(localStorage.getItem("order")===null ? "Priority" : localStorage.getItem("order"));
  const changeGroup = (e) => setGroup(e.target.value);
  const changeOrder = (e) => setOrder(e.target.value);
  const [reqData, setReqData] = useState();

  useEffect(() => {
    localStorage.setItem("group",group);
  }, [group]);
  useEffect(() => {
    localStorage.setItem("order",order);
  }, [order]);

  const getData = async () => {
      await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment")
                  .then(res => res.data)
                  .then(data => {
                    setReqData(data);
                    console.log(data);
                  })
                  .catch(err => window.alert("Something Gone Wrong...\npage refresh the page or try again later\n and error: "+err));
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <Nav group={group} order={order} changeGroup={changeGroup} changeOrder={changeOrder} />
      {reqData===undefined ? <h2 style={{textAlign:"center", marginTop: "3rem"}}>Nothing To Show</h2> : <Main group={group} order={order} reqData={reqData}/>}
    </>
  )
}

export default App;
