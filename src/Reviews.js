import React from 'react';
import './App.css';

function Reviews(){
    // memepersiapkan data dummy json
    const users = [
      {
        "id": 1,
        "name": "Bertie Romaynes",
        "review": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
      }, 
      {
        "id": 2,
        "name": "Reta Delaney",
        "review": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
      }, 
      {
        "id": 3,
        "name": "Tricia Taggert",
        "review": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
      }, 
      {
        "id": 4,
        "name": "Morris Downse",
        "review": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
      }, 
      {
        "id": 5,
        "name": "Diann Darque",
        "review": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
      }
    ]
    const listReviews = users.map((itemReviews) =>
      <div className="items">
        <img src="img/avatar.jpeg" alt="avatar"/>
        <div className="user">
          <h3>{itemReviews.name}</h3>
          <p>{itemReviews.review}</p>
        </div>
      </div>
    )
  
    return(
      <div className="review-box">
        <h2>Reviews</h2>
        {listReviews}
      </div>
    )
  }

  export default Reviews;