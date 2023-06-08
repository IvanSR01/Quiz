import React from 'react'
import styles from './Item.module.scss'
import { Link, useLocation, useParams } from 'react-router-dom'
import Button from '../Button/Button'
import { motion } from 'framer-motion'
interface IItem {
	title: string
	imgUrl?: string
	i: number
	setClick?: (num: number) => void
}

const ItemStart: React.FC<IItem> = ({ title, imgUrl, i, setClick }) => {
	const { pathname } = useLocation()
	const { id } = useParams()
	const onClick = (num: number) => {
		return setClick ? setClick(num) : console.log(null)
	}
	return (
		<motion.div
			className={styles.wrapper}
			initial={{
				y: '100px',
				opacity: 0
			}}
			whileInView={{
				y: '0px',
				opacity: 1
			}}
			transition={{
				delay: 0,
				duration: 0.5
			}}
		>
			<img src={`https://zxcivan07.github.io/Quiz/${imgUrl || ''}`} alt='' />
			<p>{title}</p>
			{pathname === `/quiz/${id}` ? (
				<>
					<Button onClick={() => onClick(1)}>Приступить</Button>
				</>
			) : (
				<Link to={`/quiz/${i}`}>
					<Button>Приступить</Button>
				</Link>
			)}
		</motion.div>
	)
}

export default ItemStart
