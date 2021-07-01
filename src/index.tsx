import ReactDom from 'react-dom';
import UserSearch from './classes/UserSearch';

interface User {
	name: string,
	age: number
}

const users: User[] = [
	{ name: "alex", age: 20 },
	{ name: "alex", age: 20 },
	{ name: "alex", age: 20 },
]
const App = () => {
	return <div>
		<UserSearch
			users={users}
		/>
	</div>
}

ReactDom.render(
	<App />,
	document.querySelector('#root')
)