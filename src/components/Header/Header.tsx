import React from 'react'
import styles from './Header.module.scss'
import Svg from './Svg'
import { Link, useLocation } from 'react-router-dom'
import { data } from './Data'
import { SearchContext } from '../../provider/SearchProvider'

const Header: React.FC = () => {
	const { pathname } = useLocation()
	const { setSearch } = React.useContext(SearchContext)
	const [value, setValue] = React.useState<string>('')
	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
		setSearch(e.target.value)
	}
	return (
		<div className={styles.wrapper}>
			<Link style={{ textDecoration: 'none' }} to='/'>
				<div className={styles.logo}>
					<Svg />
					<p>REACT QUIZ</p>
				</div>
			</Link>
			<div>
				<input placeholder='Поиск...' type="text" value={value} onChange={(e) => onChange(e)} />
			</div>
			<div className={styles.links}>
				{data.map((item, i) => (
					<Link key={i} to={item.path}>
						<button className={pathname === item.path ? styles.active : ''}>
							{item.title}
						</button>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Header
