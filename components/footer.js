import styles from '../styles/header.module.scss';

export default function Footer({ children }) {
	return ( 
		<footer className="bg-gray-200 text-center lg:text-left">
			<div className="text-gray-700 text-center p-4">
				© 2021 Copyright by insxght
			</div>
		</footer>
	);
}