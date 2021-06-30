import { useState } from 'react'

const users = [
	{ name: "Alex", age: 20 },
	{ name: "Felix", age: 20 },
	{ name: "Kim", age: 20 },
]

const UserSearch: React.FC = () => {
	const [name, setName] = useState('');
	const [user, setUser] = useState<{ name: string, age: number } | undefined>()
	const onClick = () => {
		const foundUser = users.find((user) => {
			return user.name === name
		})
		setUser(foundUser)
	}
	return (
		<div>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Search User</button>
			<div>
				{user && user.name}
				{user && user.age}
			</div>
		</div>
	)
}

export default UserSearch
