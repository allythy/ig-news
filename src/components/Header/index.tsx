import { SingInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
	return (
		<header className={styles.header_conatiner}>
			<div className={styles.header_content}>
				<img src="/images/logo.svg" alt="logo do ignews" />
				<nav className={styles.navigation}>
					<a className={styles.active}>Home</a>
					<a>Post</a>
				</nav>
				<SingInButton />
			</div>
		</header>
	);
}