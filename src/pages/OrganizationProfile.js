import React, {useEffect} from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/Navbar_menu'
import axios from 'axios'
import { useState } from 'react'

export default function OrganizationProfile() {

    const token = localStorage.getItem('token');

    const [orgData,setOrgData] = useState('');
    useEffect(() => {
        const config = {
            headers: {Authorization: `Bearer ${token}`},
        };

    if(config != null){
        axios.get('http://localhost:8081/api/v1/getOrganization', config)
            .then(response => {
                setOrgData(response.data);
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            });
    }
     }, [token]);

    return (
        <div>

            <Navbar/>
            <Navbar_menu/>
            <div class="container mb-5 mt-5">
                <div class="row">
                    <div class="col-md-6">

                        <div class="profile-block border" style={{background:'rgba(217, 217, 217, 0.18)',borderColor:'#141414',width:'400px',height:'600px'}}>
                            <p class="text-start" style={{fontWeight:'bold',marginLeft:'5%',marginTop:'5%'}}>{orgData.organization_name}</p>
                            <p class="text-start" style={{color:'rgba(139, 136, 136, 1)',marginLeft:'5%'}}>Organization ID:<a>{orgData.id}</a></p>
                            <div class="container border-top mt-5"></div>
                            <p class="text-start" style={{fontWeight:'bold',marginTop:'40px',marginLeft:'5%',color:'rgba(139, 136, 136, 1)'}}>City:</p>
                            <p class="text-start" style={{marginLeft:'5%',fontWeight:'bold'}}>Astana</p>
                            <p class="text-start" style={{fontWeight:'bold',marginTop:'40px',marginLeft:'5%',color:'rgba(139, 136, 136, 1)'}}>Activity:</p>
                            <p class="text-start" style={{marginLeft:'5%',fontWeight:'bold'}}>{orgData.activity}</p>
                            <p class="text-start" style={{fontWeight:'bold',marginTop:'40px',marginLeft:'5%',color:'rgba(139, 136, 136, 1)'}}>Contacts:</p>
                            <p class="text-start" style={{marginLeft:'5%',fontWeight:'bold'}}>{orgData.number}</p>
                            <p class="text-start" style={{marginLeft:'5%',fontWeight:'bold'}}>{orgData.email}</p>
                        </div>
                    </div>
                    <div class="col-md-6">

                        <div className="settings-menu">
                            <h1 class="text-start" style={{fontWeight:'bold'}}>About organization</h1>
                            <p class="text-start" style={{marginTop:'10%'}}>The MRC "Astana Zhastary" Municipal State Institution of the Akimat of Astana city was established on February 7, 2014 to implement youth policy at the regional level and is a subordinate organization of the Akimat. KGU "MRC "Astana zhastary" works with young people aged 14 to 29 years (soon to 35 years). Young people make up about 30 per cent of the country's population and are an important link in society. Youth plays an important role in the formation of a strong and prosperous state. In this regard, the MRC "Astana zhastary" carries out extensive work in the field of youth policy in five main areas: 1. employment and career guidance; 2. legal assistance; 3. development of neighborhood clubs; 4. development of volunteer movement; 5. support for youth initiatives. 6. work with NEET category (the Youth Service Center project works in this direction).</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}
