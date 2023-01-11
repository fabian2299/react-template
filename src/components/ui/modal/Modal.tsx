import { useState } from 'react'

export default function Modal() {
	const [test, setTest] = useState(false)

	return (
		<div>
			<button type="button" onClick={() => setTest(true)}>
				{test}
			</button>
		</div>
	)
}
