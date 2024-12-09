import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  tooltip?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  tooltip,
  className = '',
  ...props
}) => {
  const id = props.id || props.name;

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
        {tooltip && (
          <span className="ml-1 text-xs text-gray-500">{tooltip}</span>
        )}
      </label>
      <motion.div
        initial={false}
        animate={error ? { x: [-4, 4, -2, 2, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        <input
          {...props}
          id={id}
          className={`
            block w-full px-3 py-2 border rounded-md shadow-sm 
            placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error ? 'border-red-300' : 'border-gray-300'}
            ${className}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      </motion.div>
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;