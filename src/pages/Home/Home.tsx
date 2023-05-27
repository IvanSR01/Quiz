import React from 'react'
import ItemStart from '../../components/Item/ItemStart'
import styles from './Home.module.scss'
import { data } from './data'
import { SearchContext } from '../../provider/SearchProvider'
const Home: React.FC = () => {
	const { search } = React.useContext(SearchContext)
	return (
		<div className={styles.wrapper}>
			{data.filter(item => item[0].title.toLowerCase().includes(search.toLowerCase())).map((item, i) => (
				<ItemStart title={item[0].title} imgUrl={item[0].imgUrl} i={i}  key={i}/>
			))}
		</div>
	)
}

export default Home
