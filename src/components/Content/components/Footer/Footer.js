import React from 'react'
import './Footer.css'

export const Footer = () => {

	const currentYear = new Date().getFullYear()

	return (
		<footer>
			<div></div>
			<h1>Footer - {currentYear}</h1>
			<div></div>
		</footer>
	)
}
