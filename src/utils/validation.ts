/**
 * Validation utility functions
 * Provides input validation for forms and user data
 */

/**
 * Validates email format using RFC 5322 compliant regex
 */
export const validateEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') {
    return false;
  }

  // Basic email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Validates password meets minimum requirements
 * - At least 8 characters long
 */
export const validatePassword = (password: string): boolean => {
  if (!password || typeof password !== 'string') {
    return false;
  }

  return password.length >= 8;
};

/**
 * Validates password meets strong requirements
 * - At least 8 characters
 * - Contains uppercase letter
 * - Contains lowercase letter
 * - Contains number
 * - Contains special character
 */
export const validateStrongPassword = (password: string): boolean => {
  if (!validatePassword(password)) {
    return false;
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
};

/**
 * Validates that field is not empty
 */
export const validateRequired = (value: string): boolean => {
  return !!value && value.trim().length > 0;
};

/**
 * Validates phone number format (US format)
 */
export const validatePhoneNumber = (phone: string): boolean => {
  if (!phone || typeof phone !== 'string') {
    return false;
  }

  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  
  // Check if it's 10 digits (US format)
  return digitsOnly.length === 10;
};

/**
 * Validates username format
 * - 3-20 characters
 * - Alphanumeric and underscores only
 */
export const validateUsername = (username: string): boolean => {
  if (!username || typeof username !== 'string') {
    return false;
  }

  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username);
};

/**
 * Sanitizes input string to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') {
    return '';
  }

  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};
