import styles from '../styles/body.module.scss';

export default function Body({ children }) {
	return ( 
		<section className = { styles.content }>
			{ children }
		</section>
	);
}