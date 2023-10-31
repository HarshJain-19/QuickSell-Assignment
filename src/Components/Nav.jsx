import React from 'react'
import "../Styles/nav style.css"

const Nav = ({group, changeGroup, order, changeOrder}) => {
    const openMenu = (e) => {
        let x = document.getElementById("opt").style.rotate;
        document.getElementById("opt").style.rotate = (x==='0deg' || x==='' ? '180deg' : '0deg');
        document.getElementsByClassName("sort")[0].classList.toggle("menu-open");
    }

  return (
    <header>
      <div className="sort" onClick={openMenu}>
        <img src="https://img.icons8.com/ios-filled/100/000000/vertical-settings-mixer--v1.png" alt="" /> 
        <h2>Display</h2>
        <img src="https://img.icons8.com/ios-glyphs/90/chevron-down.png" alt="" id="opt" />
      </div>
      <div className="outer">
        <div className="outer-sec">
            Grouping 
            <select name="sort-choose" id="sort-choose1" value={group} onChange={changeGroup}>
                <option value="Status">Status</option>
                <option value="Priority">Priority</option>
                <option value="User">User</option>
            </select>
        </div>
        <div className="outer-sec">
            Ordering
            <select name="sort-choose" id="sort-choose2" value={order} onChange={changeOrder}>
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
            </select>
        </div>
      </div>
    </header>
  )
}

export default Nav
