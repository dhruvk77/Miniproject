
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AdminNavbar = () => {
  const [getuserdata, setDiseasedata] = useState([]);
  console.log(getuserdata);

  const { token } = useParams("token");
  console.log(token);
  
 // const history = useHistory("");

  const getdata = async () => {

      const res = await fetch(`/api/user/profile/${token}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
          console.log("error ");

      } else {
          setDiseasedata(data)
          console.log("get data");
      }
  }

  useEffect(() => {
      getdata();
  }, [])



  return (
   
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <a class="navbar-brand mt-2 mt-lg-0" href="">
        <img
          src="https://imgtr.ee/images/2023/05/31/1s6fi.jpg"
          height="35"
          alt="MEDI MIND Logo"
          loading="lazy"
        />
      </a>
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">

        <a class="nav-link" href={`/uhome/${token}`}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={`http://localhost:3000/profile/${token}`}> View Profile</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href={`http://localhost:3000/record/${token}`}>Enter Record</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={`http://localhost:3000/recordview/${token}`}>View Record</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={`http://localhost:5000/`}>Skin Disease Detection</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={`http://localhost:8501/`}>Heart and Diabetes Detection</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/">Logout</a>
        </li>
      </ul>
    </div>
    </div>
</nav>


  )
}

export default AdminNavbar