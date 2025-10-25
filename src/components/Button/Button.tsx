import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  children?: React.ReactNode
}

/**
 * A customizable button component with loading state support.
 * 
 * This component extends the standard HTML button element with additional functionality
 * including a loading state that disables interaction and shows a loading message.
 * It supports all standard button properties and events.
 * 
 * @param props - The button properties
 * @param props.loading - Whether to show loading state (disables button and shows "Carregando...")
 * @param props.children - The button content (text, icons, etc.)
 * @param props.className - Additional CSS classes to apply to the button
 * @param props.onClick - Click event handler
 * @param props.disabled - Whether the button is disabled
 * @param props.type - Button type (button, submit, reset)
 * 
 * @returns A button component with loading state support
 * 
 * @example
 * // Basic button
 * <Button onClick={() => console.log('Clicked!')}>
 *   Click me
 * </Button>
 * 
 * @example
 * // Submit button with loading state
 * const [isSubmitting, setIsSubmitting] = useState(false)
 * 
 * const handleSubmit = async () => {
 *   setIsSubmitting(true)
 *   try {
 *     await submitForm()
 *   } finally {
 *     setIsSubmitting(false)
 *   }
 * }
 * 
 * <Button 
 *   type="submit" 
 *   loading={isSubmitting} 
 *   onClick={handleSubmit}
 * >
 *   Submit Form
 * </Button>
 * 
 * @example
 * // Button with custom styling and disabled state
 * <Button 
 *   className="bg-red-500 hover:bg-red-600 px-6 py-3 text-lg"
 *   disabled={!isFormValid}
 *   onClick={handleDelete}
 * >
 *   Delete Item
 * </Button>
 * 
 * @example
 * // Button with icon and loading
 * <Button 
 *   loading={isLoading}
 *   className="flex items-center gap-2"
 * >
 *   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
 *     <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
 *     <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
 *   </svg>
 *   View Details
 * </Button>
 */
const Button = ({ loading = false, className = '', children, onClick, ...props }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (loading) {
      e.preventDefault()
      return
    }

    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {loading ? 'Carregando...' : children}
    </button>
  )
}

export default Button