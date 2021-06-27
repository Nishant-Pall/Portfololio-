import ReactDom from 'react-dom';

const App = () =>{
	return <div>
		<h1>YOOO</h1>
	</div>
}

ReactDom.render(
	<App/>,
	document.querySelector('#root')
)