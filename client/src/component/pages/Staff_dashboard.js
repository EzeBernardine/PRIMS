import React, { Component } from 'react';
import { ProfileCounter } from '../styles/ProfileStyles';
import Menu from '../features/Menu';
import { FaUserPlus } from "react-icons/fa";
import { IoIosPersonAdd, IoIosHome, IoIosPeople, IoIosAdd, IoMdLogOut } from "react-icons/io";
import { Button } from '../styles/ButtonStyles';
import {NavLink} from 'react-router-dom'



export default class Staff_dashboard extends Component {

  render() {
    let menus = [
      {
        name: 'PRISONERS',
        to: '/allprisoners'
      },
      {
        name: 'PRISONS',
        to: '/prisons'
      },
    ]

    let profile = [
      {
        Age: 12,
        PrisonUnit: 'Abayi Prison Center',
        position: 'Secretary'
      }
    ]

    return (
      <ProfileCounter>
        <Menu menus={menus} />

        <div className='profileDiv'>
          <aside>
            <div>
              <h2>My Dashboard</h2>
              <ul>   
                <li><NavLink to='/addprisoner'> <FaUserPlus /> <span>ADD PRISONER</span></NavLink></li>
                <li><NavLink to='/allprisoners'><IoIosPeople /> <span>ALL PRISONER</span></NavLink></li>
                <li><NavLink to='/allStaff'> <IoIosPeople /> <span>ALL STAFFS</span></NavLink></li>
                <li><NavLink to='/rehabcenters'><IoIosHome /> <span>REHAB CENTERS</span></NavLink></li>
                <li><NavLink to='/'><IoMdLogOut /> <span>LOGOUT</span></NavLink></li>
              </ul>
            </div>
          </aside>

          <section className='profileAside'>
            <aside>
              <div>
                <img src={require('../image/staff.jpg')} alt="Logo" />
              </div>
              <h3>Okonkwo Andji</h3>
              {
                profile.map(profile => (
                  <ul>
                    <li>
                      <span>Position: </span>
                      <span>{profile.position}</span>
                    </li>
                    <li>
                      <span>Prison Unit: </span>
                      <span>{profile.PrisonUnit}</span>
                    </li>
                    <li>
                      <span>Age: </span>
                      <span>{profile.Age}</span>
                    </li>
                    <li>
                      <span>Nationality: </span>
                      <span>Nigerian</span>
                    </li>
                  </ul>
                ))
              }
            </aside>

         

            <div className='btn'>
            <Button red>Delete Account</Button>
            </div>
          </section>

        </div>

      </ProfileCounter>
    );
  }
}

















