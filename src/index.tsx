import ReactDom from 'react-dom';
import UserSearch from './state/userSearch';

const App = () => {
	return <div>
		<UserSearch />
	</div>
}

ReactDom.render(
	<App />,
	document.querySelector('#root')
)