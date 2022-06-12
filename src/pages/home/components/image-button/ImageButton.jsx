import cn from "classnames";
import styles from "@home/components/image-button/image-button.module";

function ImageButton({ children, onClick, included, className }) {
  if (onClick && typeof onClick !== 'function') throw new Error("onClick은 함수만 가능합니다");

  return (
    <button
      className={cn(styles.imageButton, className)}
      type="button"
      onClick={onClick}
      {...(included ? { disabled: true } : {})}
    >
      {children}
    </button>
  );
}

export default ImageButton;
