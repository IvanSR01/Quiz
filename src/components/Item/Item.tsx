import React from 'react'
import styles from './Item.module.scss'
import { Link, useParams } from 'react-router-dom';
import ItemStart from './ItemStart';
import { data } from '../../pages/Home/data';
import Button from '../Button/Button';

type IMas = {
	title: string;
	imgUrl?: string;
	variants?: string[];
	correct?: number;
}
type IParams = {
	id: string
}

const Item: React.FC = () => {
	const [pagesCount, setPagesCount] = React.useState<number>(0)
	const [correctCount, setCorrectCount] = React.useState<number>(0)
	const [imgFinish, setImgFinish] = React.useState<string>('')
	const { id } = useParams<IParams>()
	const item: IMas[] = data[Number(id)]
	const i = 0;
	const pagesCountMax: number = item.length
	const pages: IMas = item[pagesCount]
	const onClick = (i: number) => {
		console.log(pages.correct, i)
		if (pages.correct === i) {
			setCorrectCount(correctCount + 1)
		}
		setPagesCount(pagesCount + 1)
	}
	const onClickRestart = () => {
		setPagesCount(0)
		setCorrectCount(0)
	}
	React.useEffect(() => {
		const procent = (correctCount / (item.length - 1) * 100)
		const procentMas = 100
		if (procent == procentMas) {
			setImgFinish('public/like-svgrepo-com (1).svg')
		}
		else if (procent >= procentMas / 2) {
			setImgFinish('public/like-romance-love-heart-svgrepo-com.svg')
		}
		else {
			setImgFinish('public/like-award-favorite-star-svgrepo-com.svg')
		}
	}, [pagesCount, correctCount])
	return (
		<div className={styles.wrapperGame}>
			{pagesCount === 0 ?
				<ItemStart i={i} title={pages.title} imgUrl={pages.imgUrl || ''} setClick={() => setPagesCount(1)} />
				: item[pagesCount] === undefined ?
					<div className={styles.finish}>
						<img src={`http://localhost:5173/${imgFinish}`} alt="" />
						<p>Правильных ответо {correctCount} из {item.length - 1}</p>
						<div className={styles.buttons}>
							<Link to='/'>
								<Button>
									На главную
								</Button>
							</Link>
							<Button onClick={() => onClickRestart()}>
								Заново
							</Button>
						</div>
					</div>
					: <div className={styles.game}>
						<div style={{ width: `${pagesCount / pagesCountMax * 100}%` }}
							className={styles.progressBar}></div>
						<h2>{pages.title}</h2>
						<ul>
							{pages.variants?.map((item, i) => (
								<li onClick={() => onClick(i)} key={i}>{item}</li>
							))}
						</ul>
					</div>}
		</div>
	)
}

export default Item
