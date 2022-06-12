import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import styles from "./delete-icon.module";

function DeleteIcon({ onClick, className }) {
  if (onClick && typeof onClick !== 'function') throw new Error("onClick은 함수만 가능합니다");
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(styles.deleteIcon, className)}
    >
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
}

export default DeleteIcon;
