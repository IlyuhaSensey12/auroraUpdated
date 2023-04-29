import React, {useEffect, useState} from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/Navbar_menu'
import Footer from '../layout/Footer'
import axios from "axios";

function User(usp) {
  return (
      <div className="container" style={{background:'#FFFFFF',border:'1px solid #006BA8',width:'50%',marginTop:'5%'}}>
        <h2 className='text-center'>{usp.firstname} {usp.lastname}:{usp.rating}</h2>
        <p className='text-center'>{usp.id}</p>
      </div>
  );
}

function UserList(usp) {
  return (
      <div className='container'>
        {usp.users.map(user => (
            <User key={user.id} firstname={user.firstname} lastname={user.lastname} rating={user.rating}/>
        ))}
      </div>
  );
}

export default function Volunteering() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/showAllUsers')
        .then(response => {
          console.log('Posts data:', response.data);
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching posts data:', error);
        });
  }, []);

  return (
    <div>
    <Navbar/>
    <Navbar_menu/>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between",marginBottom:'5%',marginTop:'5%'}}>
    <div style={{ width: "15%",background:'rgba(217, 217, 217, 0.18)',marginLeft:'15%'}}>
    <div>
  <h5>Region</h5>
  <select className="form-control mr-2" id="region" style={{width:'50%',marginLeft:'25%',background:'#D9D9D9'}}>
      <option value="Almaty">Almaty</option>
      <option value="Astana">Astana</option>
      <option value="Shymkent">Shymkent</option>
      {/* Добавьте остальные варианты регионов здесь */}
    </select>
    <h5 style={{marginTop:'5%'}}>From of organization</h5>
  <div class="text text-start" style={{ display: "flex", flexDirection: "column" }}>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Public Association</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Public Foundation</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Charity Fund</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Volunteer movement</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Initiative</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>group</a></label>
  </div>  
  <h5 style={{marginTop:'5%'}}>Direction</h5>
  <div class="text text-start" style={{ display: "flex", flexDirection: "column" }}>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Volunteering in medicine</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Environmental volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Social volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Media volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Event volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Help animals</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Emergency volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Cultural volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Donorship</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Sports volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Pro bono volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Corporate volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Online volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Ethno – volunteering</a></label>
  </div>
  <h5 style={{marginTop:'5%'}}>Sorting</h5>
  <hr />
  <div>By ranking</div>
</div>
    </div>
  <div style={{ width: "70%" }}>
  <div class="input-group mb-3" style={{width:'50%',marginLeft:'25%'}}>
  <input type="text" class="form-control" placeholder="Find by Name or ID" aria-label="Username" aria-describedby="basic-addon1"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
    </button>
  </div>
    </div>
    <div className="container border-bottom mb-5 mt-5" style={{marginLeft: '5%', width: '80%'}}><UserList users={users}/></div>

  {/*  <div class="container border-bottom mb-5 mt-5" style={{marginLeft:'5%',width:'80%'}}>*/}
  {/*  <div class="row">*/}
  {/*    <div class="row">*/}
  {/*      <div class="container">*/}
  {/*        <div class="container">*/}
  {/*          <div class="d-flex text-black">*/}
  {/*            <div class="flex-shrink-0">*/}
  {/*            <img src={require('/Users/elliasmussayev/Desktop/aurora/src/Icon/nophoto.png')} alt="Моя картинка" style={{width: '100px', height: '100px'}}/>*/}
  {/*            </div>*/}
  {/*            <div class="container">*/}
  {/*              <h5 class="mb-1 text-start" style={{marginLeft:'10%'}}>Kurmanov Bairan</h5>*/}
  {/*              <p class="mb-2 pb-1 text-start" style={{color:'rgba(139, 136, 136, 1)',marginLeft:'10%'}}>Volunteer ID:<a>63446</a></p>*/}
  {/*              <p class="text-start" style={{marginLeft:'10%'}}>Working person I can eat</p>*/}
  {/*            </div>*/}
  {/*          </div>*/}
  {/*        </div>*/}
  {/*      </div>*/}
  {/*    </div>*/}
  {/*  </div>*/}
  {/*</div>*/}

  {/*<div class="container border-bottom mb-5 mt-5" style={{marginLeft:'5%',width:'80%'}}>*/}
  {/*  <div class="row">*/}
  {/*    <div class="row">*/}
  {/*      <div class="container">*/}
  {/*        <div class="container">*/}
  {/*          <div class="d-flex text-black">*/}
  {/*            <div class="flex-shrink-0">*/}
  {/*            <img src={require('/Users/elliasmussayev/Desktop/aurora/src/Icon/nophoto.png')} alt="Моя картинка" style={{width: '100px', height: '100px'}}/>*/}
  {/*            </div>*/}
  {/*            <div class="container">*/}
  {/*              <h5 class="mb-1 text-start" style={{marginLeft:'10%'}}>Kaiipbek Tauzhan</h5>*/}
  {/*              <p class="mb-2 pb-1 text-start" style={{color:'rgba(139, 136, 136, 1)',marginLeft:'10%'}}>Volunteer ID:<a>63447</a></p>*/}
  {/*              <p class="text-start" style={{marginLeft:'10%'}}>I read books, except for science fiction, I like to watch films, I have a penchant for acting, a model.</p>*/}
  {/*            </div>*/}
  {/*          </div>*/}
  {/*        </div>*/}
  {/*      </div>*/}
  {/*    </div>*/}
  {/*  </div>*/}
  {/*</div>*/}

  {/*<div class="container border-bottom mb-5 mt-5" style={{marginLeft:'5%',width:'80%'}}>*/}
  {/*  <div class="row">*/}
  {/*    <div class="row">*/}
  {/*      <div class="container">*/}
  {/*        <div class="container">*/}
  {/*          <div class="d-flex text-black">*/}
  {/*            <div class="flex-shrink-0">*/}
  {/*            <img src={require('/Users/elliasmussayev/Desktop/aurora/src/Icon/nophoto.png')} alt="Моя картинка" style={{width: '100px', height: '100px'}}/>*/}
  {/*            </div>*/}
  {/*            <div class="container">*/}
  {/*              <h5 class="mb-1 text-start" style={{marginLeft:'10%'}}>Naran Airat</h5>*/}
  {/*              <p class="mb-2 pb-1 text-start" style={{color:'rgba(139, 136, 136, 1)',marginLeft:'10%'}}>Volunteer ID:<a>63448</a></p>*/}
  {/*              <p class="text-start" style={{marginLeft:'10%'}}>I am 15 years old, a 10th grade student at the "Bilim-innovation" lyceum-boarding school. Responsible, participated in the organization of concerts, performed on stage, host on stage.</p>*/}
  {/*            </div>*/}
  {/*          </div>*/}
  {/*        </div>*/}
  {/*      </div>*/}
  {/*    </div>*/}
  {/*  </div>*/}
  {/*</div>*/}

  

  </div>
</div>
    <Footer/>
    </div>
  )
}
