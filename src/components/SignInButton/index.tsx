import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";
import { FiX } from 'react-icons/fi'

export function SingInButton() {
  const isUserLoggeIn = true;
  return isUserLoggeIn ? (
    <button type="button" className={styles.singInButton}>
      <FaGithub color="#04d361" />
      Allythy
			<FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button type="button" className={styles.singInButton}>
      <FaGithub color="#eba417" />
      Sing In with GitHub
    </button>
  );
}
