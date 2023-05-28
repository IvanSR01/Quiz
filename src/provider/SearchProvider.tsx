import React from 'react'

interface ISearchConstex {
	search: string;
	setSearch?: (value: string) => void;
}

const defultValue = {
	search: ''
}

export const SearchContext = React.createContext<ISearchConstex>(defultValue)

interface IChildren {
	children: React.ReactNode
}

const SearchProvider: React.FC<IChildren> = ({ children }) => {
	const [search, setSearch] = React.useState<string>('')
	return (
		<SearchContext.Provider value={{ search, setSearch }}>
			{children}
		</SearchContext.Provider>
	)
}

export default SearchProvider
