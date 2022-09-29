import Head from 'next/head'
import withTransition from "../HOC/withTransition";

import styles from '../styles/layout.module.scss';

function Home() {
	return (
		<>
			<Head>
				<title>Heyyyyyyo</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Michroma&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<div className={styles.container}>
				<div className="flex h-screen items-center justify-center">
					<div className={`card p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${styles.card}`}>
						<div className={`card-body ${styles.card_body}`}>
							<h1 className="card-title text-4xl">Welcome to insxght</h1>
							<p className="card-text">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
							<a href="#" className="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default withTransition(Home);
