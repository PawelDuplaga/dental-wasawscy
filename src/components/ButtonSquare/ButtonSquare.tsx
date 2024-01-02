import styles from './buttonSquare.module.scss';
import { MdArrowOutward } from "react-icons/md";

const ButtonSquare = () => {
  return (
		<button className={styles.buttonSquareContainer}>
      umow wizyte
      <MdArrowOutward />
		</button>
  );
};

export default ButtonSquare