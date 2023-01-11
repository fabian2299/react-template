import { cva, VariantProps } from 'class-variance-authority'
import styles from './Button.module.css'

const buttonStyles = cva(styles.button, {
	variants: {
		intent: {
			primary: styles['button--primary'],
			secondary: styles['button--secondary'],
			danger: styles['button--danger'],
		},
		fullWidth: {
			true: styles['button--full-width'],
		},
	},
	defaultVariants: {
		intent: 'primary',
		fullWidth: false,
	},
})

interface Props
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonStyles> {}

export function Button({ intent, fullWidth, children, type, ...props }: Props) {
	return (
		<button
			type={type ? 'submit' : 'button'}
			className={buttonStyles({ intent, fullWidth })}
			{...props}
		>
			{children}
		</button>
	)
}
