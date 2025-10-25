import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

/**
 * A customizable input component with optional label.
 * 
 * This component extends the standard HTML input element with additional styling
 * and an optional label. It supports all standard input properties and events.
 * 
 * @param props - The input properties
 * @param props.className - Additional CSS classes to apply to the input element
 * @param props.label - Optional label text to display above the input
 * @param props.id - The input element ID (used for label association)
 * @param props.type - Input type (text, email, password, etc.)
 * @param props.placeholder - Placeholder text for the input
 * @param props.value - Controlled input value
 * @param props.onChange - Change event handler
 * @param props.onFocus - Focus event handler
 * @param props.onBlur - Blur event handler
 * @param props.disabled - Whether the input is disabled
 * @param props.required - Whether the input is required
 * 
 * @returns A labeled input component
 * 
 * @example
 * // Basic usage with label
 * <Input 
 *   id="username" 
 *   label="Username" 
 *   type="text" 
 *   placeholder="Enter your username" 
 * />
 * 
 * @example
 * // Controlled input with custom styling
 * const [email, setEmail] = useState('')
 * 
 * <Input
 *   id="email"
 *   label="Email Address"
 *   type="email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   className="w-full"
 *   placeholder="your@email.com"
 *   required
 * />
 * 
 * @example
 * // Password input with validation
 * <Input
 *   id="password"
 *   label="Password"
 *   type="password"
 *   placeholder="Enter a secure password"
 *   minLength={8}
 *   required
 * />
 * 
 * @example
 * // Input without label
 * <Input
 *   id="search"
 *   type="search"
 *   placeholder="Search Pokémon..."
 *   className="border-blue-400"
 * />
 */
const Input = ({ className = '', label = '', ...props }: InputProps) => {

  return (
    <div>
      <label className="block text-gray-700 font-semibold" htmlFor={props.id}>{label}</label>
      <input
        className={`px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input