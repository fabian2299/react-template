import { Button } from '@ui/button/Button'
import { render, screen } from '@/utils/test-utils'

describe('Button', () => {
	it('renders correctly', () => {
		render(<Button>Click me</Button>)
		expect(screen.getByText(/click me/i)).toBeInTheDocument()
	})
})
