import React, { Component } from 'react';
import { Rehab_dashboardContainer } from '../styles/Rehab_dashboardStyles';
import Menu from '../features/Menu';
import { FaSearchengin } from "react-icons/fa";
// import { FaSearchengin } from "react-icons/io";
import { Button } from '../styles/ButtonStyles';
import { Flex } from '../styles/LandingStyles'
import { NavLink } from 'react-router-dom';


export default class Rehab_dashboard extends Component {

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



		let prisoners = JSON.parse(localStorage.getItem('prisoners'))


		return (
			<Rehab_dashboardContainer>
				<Menu menus={menus} />

				<div className='rehabMain'>
					<div className='profileImg'><img src={require('../image/rehab.jpg')} /></div>

					<div className='profileContent'>
						<h1 className='name'> Best Drug Rehabilitation</h1>
						<h2 className='manager'>Mrs Okoroafor Onukwuba	</h2>
						<ul>
							<li>08015474589</li>
							<li>Enugu State</li>
							<li>Okplomo Ihu</li>
						</ul>
						<Button red SM>Delete Account</Button>
					</div>
				</div>


				<Flex className='search' justifyCenter>
					<input />
					<Button ><FaSearchengin /></Button>
				</Flex>

				<section>
					{
						prisoners.map((prisoner, index) => (
							<div className='eachPrisoner'  key={index}>
								<div className='prisonerImgDiv'>
									<img src={prisoner.image}></img>
								</div>
								<div className='personalDetail'>
									<p>
										<span>{prisoner.name}</span>
									</p>
									<p>
										<span >{prisoner.nationality} </span>
									</p>
									<p>
										<span >{prisoner.gender} </span>
									</p>
									<p className='duration'>
										<small>{prisoner.dateImprisoned} _{prisoner.dateReleased} </small>
									</p>
									<p className='duration'>
										<small>{prisoner.timeReleased} </small>
									</p>
								</div>
							</div>
						))
					}
				</section>
			</Rehab_dashboardContainer>
		);
	}
}


































