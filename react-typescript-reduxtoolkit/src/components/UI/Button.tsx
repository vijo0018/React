import { FC } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined
  className?: string | undefined
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button type={props.type} className={`${props.className} ${styles.button}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
