import React from 'react'
import styles from './Button.module.scss';

interface IChildren {
	children: React.ReactNode,
	onClick?: () => void
}

const Button: React.FC<IChildren> = ({children, onClick}) => {
	return (
		<button onClick={onClick} className={styles.button}>
			{children}
		</button>
	)
}

export default Button
