import { render, screen } from '@/utils/test-utils'
import { Button } from '@ui/button/Button'

describe('Button', () => {
	it('renders correctly', () => {
		render(<Button>Click me</Button>)
		expect(screen.getByText(/click me/i)).toBeInTheDocument()
	})
})
