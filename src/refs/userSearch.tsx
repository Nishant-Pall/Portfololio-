import { useState, useRef, useEffect } from 'react'

const users = [
	{ name: "Alex", age: 20 },
	{ name: "Felix", age: 20 },
	{ name: "Kim", age: 20 },
]

const UserSearch: React.FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [name, setName] = useState('');
	const [user, setUser] = useState<{ name: string, age: number } | undefined>()
	const onClick = () => {
		const foundUser = users.find((user) => {
			return user.name === name
		})
		setUser(foundUser)
	}

	useEffect(() => {
		// typeguard for refs
		if (!inputRef.current) {
			return;
		}
		inputRef.current.focus()
		// leave array empty to execute it only once
		// it's the dependency array
	}, [])
	return (
		<div>
			<input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Search User</button>
			<div>
				{user && user.name}
				{user && user.age}
			</div>
		</div>
	)
}

export default UserSearch
