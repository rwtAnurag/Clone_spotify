import React from "react";

import './Main.css';

function Main() {
  return (
    <div className="Main">
      <div className="uperNav">
      <input className="searchBar" placeholder="       Search for Artist, Songs, or Podcasts" type="text"></input>
      <a >LOGIN </a>
      </div>
      <div className="mainContest">
         <h1>uniquely yours</h1> 
         <div class="cardWrap">
            <div class="card">
              <div class="cardImage">
                 <img src="https://images.unsplash.com/photo-1506564461966-4107c88f6d29?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="pic-1"></img>
               </div>
               <div className="cardContest">
                <h3> Linked Song </h3>
               </div>
             </div>
         </div>
      </div>
    </div>
  );
}

export default Main;
