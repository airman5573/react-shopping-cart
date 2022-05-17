import styles from "./image-button.module.scss";

const cn = require("classnames");

function ImageButton({ children, onClick, included, className }) {
  return (
    <button
      className={cn("imageButton", styles.imageButton, className)}
      type="button"
      onClick={onClick}
      {...(included ? { disabled: true } : {})}
    >
      {children}
    </button>
  );
}

export default ImageButton;
