import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ 
  value, 
  onChange, 
  placeholder = '', 
  rows = 4,
  disabled = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical';
  
  const textareaClasses = `
    ${baseClasses}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={textareaClasses}
      {...props}
    />
  );
};

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default TextArea;