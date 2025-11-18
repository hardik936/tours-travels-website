// src/lib/validators.ts

/**
 * Validates an email address using a regular expression.
 * @param {string} email The email to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates that booking start and end dates are logical.
 * @param {Date} startDate The start date of the booking.
 * @param {Date} endDate The end date of the booking.
 * @returns {boolean} True if the dates are valid, false otherwise.
 */
export function validateBookingDates(startDate: Date, endDate: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to the beginning of the day
  return startDate >= today && endDate > startDate;
}

// Placeholder types for a generic form validator
export type ValidationRule = (value: any) => true | string;
export type ValidationSchema = Record<string, ValidationRule[]>;
export type ValidationResult = {
  isValid: boolean;
  errors: Record<string, string>;
};

/**
 * A generic function to validate a form data object against a schema.
 * @param {Record<string, any>} formData The data to validate.
 * @param {ValidationSchema} schema The validation schema.
 * @returns {ValidationResult} An object containing the validity status and any errors.
 */
export function validateForm(formData: Record<string, any>, schema: ValidationSchema): ValidationResult {
  const errors: Record<string, string> = {};

  for (const field in schema) {
    const rules = schema[field];
    for (const rule of rules) {
      const result = rule(formData[field]);
      if (result !== true) {
        errors[field] = result;
        break; // Stop at the first error for this field
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}