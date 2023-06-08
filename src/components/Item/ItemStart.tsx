import React from 'react'
import styles from './Item.module.scss'
import { Link, useLocation, useParams } from 'react-router-dom';
import Button from '../Button/Button';

interface IItem {
	title: string;
	imgUrl?: string;
	i: number;
	setClick?:(num: number) => void
}

const ItemStart: React.FC<IItem> = ({ title, imgUrl, i, setClick}) => {
	const { pathname } = useLocation()
	const { id } = useParams()
	const onClick = (num: number) => {
		return  setClick ? setClick(num) : console.log(null)
	}
	return (
		<div className={styles.wrapper}>
			<img src={`http://localhost:5173/${imgUrl || ''}`} alt="" />
			<p>{title}</p>
			{pathname === `/quiz/${id}` ?
				<>
					<Button onClick={() => onClick(1)}>
						Приступить
					</Button>
				</> :
				<Link to={`/quiz/${i}`}>
					<Button>
						Приступить
					</Button>
				</Link>}
		</div>
	)
}

export default ItemStart
