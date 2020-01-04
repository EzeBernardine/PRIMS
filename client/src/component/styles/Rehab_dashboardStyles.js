import styled, { css } from 'styled-components'

export const Rehab_dashboardContainer = styled.div`

  
> div:first-child {
		background: #ff5000;
		a , h1{
				color: white
		}
}
> .rehabMain{
	display: flex;
	margin: auto;
	width: 90%;
	margin-top: 92px;
	> .profileImg {
		width: 400px;
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
			> img {
				width: 100%;
				height: 100%
			}
	}
	> .profileContent {
		margin-left: 5%;
		color: #2f2e2e;
		ul {
			padding: 0;
			> .name {
				font-size: 2rem;
				font-weight: bold
			}
			> .manager {
				font-size: 1.3rem;
				font-weight: bold
			}
			li {
				list-style: none;
				margin-top: 10px;
				font-size: 14px
			}
		}
	}
}
  > .search {
		border: none;
		border-radius: 0px;
		display: flex;
		align-items: stretch;
		flex-wrap: nowrap;
		margin: 50px auto;
		width: 600px;
		background: #f2eeeb;
		padding: 10px;
		> input {
			color: black;
			width: 90%;
			background: white;
			border-radius:  25px 0 0 25px ;
			padding: 5px;
			border: none;
			}
		> button {
			border-radius: 0 25px 25px 0;
			width: 10%;
			font-size: 1.5rem
		}
	}
	section {
		width: 80%;
		margin: 50px auto;
		display: flex;
		flex-wrap: wrap;
		> .eachPrisoner{
			display: flex;
			flex-wrap: wrap;
			width: 300px;
			grid-gap: 5%;
			padding: 5px;
			background: white;
			box-shadow: 0 4px 5px 0px #f4f1f1;
			:hover {
					box-shadow: 0 4px 5px 0px #e1e1e1;
					cursor: pointer;
			}
			> .prisonerImgDiv {
					width: 45%;
					> img {width: 100%}
			}
			> .personalDetail {
					width: 50%;
					font-size: 11px;
					> .duration {
							color: red;
							font-size: 10px;
					}
			}
	}
	}

`