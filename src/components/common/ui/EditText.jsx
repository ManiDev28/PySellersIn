import React from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  value, 
  onChange, 
  placeholder = '', 
  type = 'text',
  disabled = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';
  
  const inputClasses = `
    ${baseClasses}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={inputClasses}
      {...props}
    />
  );
};

EditText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default EditText;