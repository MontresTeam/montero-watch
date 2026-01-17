/**
 * Order Form Validation Utilities
 * Industrial-level validation for order form fields
 * Provides comprehensive validation rules with detailed error messages
 */

// Regular expression patterns for validation
const VALIDATION_PATTERNS = {
    // Name: 2-50 characters, letters, spaces, hyphens, apostrophes only
    name: /^[a-zA-Z\s'-]{2,50}$/,

    // Email: RFC 5322 compliant email validation
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,

    // Phone: International format, 7-15 digits
    phone: /^[0-9\s\-\+\(\)]{7,20}$/,

    // Address: Alphanumeric with common special characters
    address: /^[a-zA-Z0-9\s,.\-#/]{5,200}$/,

    // City: Letters, spaces, hyphens, apostrophes (2-50 chars)
    city: /^[a-zA-Z\s'-]{2,50}$/,

    // State: Letters, spaces, hyphens (2-50 chars)
    state: /^[a-zA-Z\s'-]{2,50}$/,

    // Postal Code: Alphanumeric with spaces and hyphens (3-10 chars)
    postalCode: /^[a-zA-Z0-9\s-]{3,10}$/,

    // Country: Letters and spaces only (2-60 chars)
    country: /^[a-zA-Z\s]{2,60}$/,
};

// Sanitization functions
const sanitizers = {
    /**
     * Remove leading/trailing whitespace and normalize internal spaces
     */
    trimAndNormalize: (value) => {
        if (typeof value !== 'string') return '';
        return value.trim().replace(/\s+/g, ' ');
    },

    /**
     * Remove all non-alphanumeric characters except specified ones
     */
    alphanumericOnly: (value, allowedChars = '') => {
        if (typeof value !== 'string') return '';
        const pattern = new RegExp(`[^a-zA-Z0-9${allowedChars}]`, 'g');
        return value.replace(pattern, '');
    },

    /**
     * Sanitize phone number to remove formatting
     */
    phoneNumber: (value) => {
        if (typeof value !== 'string') return '';
        return value.replace(/[^\d+]/g, '');
    },

    /**
     * Prevent XSS by escaping HTML special characters
     */
    escapeHtml: (value) => {
        if (typeof value !== 'string') return '';
        const htmlEscapeMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2F;',
        };
        return value.replace(/[&<>"'/]/g, (char) => htmlEscapeMap[char]);
    },
};

// Validation functions for each field
const validators = {
    /**
     * Validate first name
     * @param {string} firstName - First name to validate
     * @returns {Object} { isValid: boolean, error: string }
     */
    firstName: (firstName) => {
        const sanitized = sanitizers.trimAndNormalize(firstName);

        if (!sanitized) {
            return { isValid: false, error: 'First name is required' };
        }

        if (sanitized.length < 2) {
            return { isValid: false, error: 'First name must be at least 2 characters' };
        }

        if (sanitized.length > 50) {
            return { isValid: false, error: 'First name must not exceed 50 characters' };
        }

        if (!VALIDATION_PATTERNS.name.test(sanitized)) {
            return { isValid: false, error: 'First name contains invalid characters' };
        }

        return { isValid: true, error: '', sanitized };
    },

    /**
     * Validate last name
     * @param {string} lastName - Last name to validate
     * @returns {Object} { isValid: boolean, error: string }
     */
    lastName: (lastName) => {
        const sanitized = sanitizers.trimAndNormalize(lastName);

        if (!sanitized) {
            return { isValid: false, error: 'Last name is required' };
        }

        if (sanitized.length < 2) {
            return { isValid: false, error: 'Last name must be at least 2 characters' };
        }

        if (sanitized.length > 50) {
            return { isValid: false, error: 'Last name must not exceed 50 characters' };
        }

        if (!VALIDATION_PATTERNS.name.test(sanitized)) {
            return { isValid: false, error: 'Last name contains invalid characters' };
        }

        return { isValid: true, error: '', sanitized };
    },

    /**
     * Validate email address
     * @param {string} email - Email to validate
     * @returns {Object} { isValid: boolean, error: string }
     */
    email: (email) => {
        const sanitized = sanitizers.trimAndNormalize(email).toLowerCase();

        if (!sanitized) {
            return { isValid: false, error: 'Email address is required' };
        }

        if (sanitized.length > 254) {
            return { isValid: false, error: 'Email address is too long' };
        }

        if (!VALIDATION_PATTERNS.email.test(sanitized)) {
            return { isValid: false, error: 'Please enter a valid email address' };
        }

        // Additional check for domain
        const parts = sanitized.split('@');
        if (parts.length !== 2 || parts[1].length < 3 || !parts[1].includes('.')) {
            return { isValid: false, error: 'Email domain is invalid' };
        }

        return { isValid: true, error: '', sanitized };
    },

    /**
     * Validate phone number
     * @param {string} phone - Phone number to validate
     * @param {string} countryCode - Country code for region-specific validation
     * @returns {Object} { isValid: boolean, error: string }
     */
    phone: (phone, countryCode = '+971') => {
        const sanitized = sanitizers.trimAndNormalize(phone);

        if (!sanitized) {
            return { isValid: false, error: 'Phone number is required' };
        }

        // Remove all non-numeric characters for length check
        const digitsOnly = sanitized.replace(/\D/g, '');

        if (digitsOnly.length < 7) {
            return { isValid: false, error: 'Phone number is too short' };
        }

        if (digitsOnly.length > 15) {
            return { isValid: false, error: 'Phone number is too long' };
        }

        if (!VALIDATION_PATTERNS.phone.test(sanitized)) {
            return { isValid: false, error: 'Phone number contains invalid characters' };
        }

        // UAE specific validation
        if (countryCode === '+971') {
            if (digitsOnly.length < 9 || digitsOnly.length > 10) {
                return { isValid: false, error: 'UAE phone number must be 9-10 digits' };
            }
        }

        // Saudi Arabia specific validation
        if (countryCode === '+966') {
            if (digitsOnly.length !== 9) {
                return { isValid: false, error: 'Saudi phone number must be 9 digits' };
            }
        }

        return { isValid: true, error: '', sanitized };
    },

    /**
     * Validate address
     * @param {string} address - Street address to validate
     * @returns {Object} { isValid: boolean, error: string }
     */
    address: (address) => {
        const sanitized = sanitizers.trimAndNormalize(address);

        if (!sanitized) {
            return { isValid: false, error: 'Address is required' };
        }

        if (sanitized.length < 5) {
            return { isValid: false, error: 'Address must be at least 5 characters' };
        }

        if (sanitized.length > 200) {
            return { isValid: false, error: 'Address must not exceed 200 characters' };
        }

        if (!VALIDATION_PATTERNS.address.test(sanitized)) {
            return { isValid: false, error: 'Address contains invalid characters' };
        }

        return { isValid: true, error: '', sanitized };
    },

    /**
     * Validate city
     * @param {string} city - City name to validate
     * @returns {Object} { isValid: boolean, error: string }
     */
    city: (city) => {
        const sanitized = sanitizers.trimAndNormalize(city);

        if (!sanitized) {
            return { isValid: false, error: 'City is required' };
        }

        if (sanitized.length < 2) {
            return { isValid: false, error: 'City name must be at least 2 characters' };
        }

        if (sanitized.length > 50) {
            return { isValid: false, error: 'City name must not exceed 50 characters' };
        }

        if (!VALIDATION_PATTERNS.city.test(sanitized)) {
            return { isValid: false, error: 'City name contains invalid characters' };
        }

        return { isValid: true, error: '', sanitized };
    },

    /**
     * Validate state/emirate
     * @param {string} state - State/emirate to validate
     * @returns {Object} { isValid: boolean, error: string }
     */
    state: (state) => {
        const sanitized = sanitizers.trimAndNormalize(state);

        // State is optional in some countries
        if (!sanitized) {
            return { isValid: true, error: '', sanitized: '' };
        }

        if (sanitized.length < 2) {
            return { isValid: false, error: 'State must be at least 2 characters' };
        }

        if (sanitized.length > 50) {
            return { isValid: false, error: 'State must not exceed 50 characters' };
        }

        if (!VALIDATION_PATTERNS.state.test(sanitized)) {
            return { isValid: false, error: 'State contains invalid characters' };
        }

        return { isValid: true, error: '', sanitized };
    },

    /**
     * Validate country
     * @param {string} country - Country name to validate
     * @returns {Object} { isValid: boolean, error: string }
     */
    country: (country) => {
        const sanitized = sanitizers.trimAndNormalize(country);

        if (!sanitized) {
            return { isValid: false, error: 'Country is required' };
        }

        const validCountries = [
            'United Arab Emirates',
            'Saudi Arabia',
            'Kuwait',
            'Qatar',
            'Bahrain',
            'Oman',
        ];

        if (!validCountries.includes(sanitized)) {
            return { isValid: false, error: 'Please select a valid country' };
        }

        return { isValid: true, error: '', sanitized };
    },

    /**
     * Validate postal/zip code
     * @param {string} zipCode - Postal code to validate
     * @param {string} country - Country for region-specific validation
     * @returns {Object} { isValid: boolean, error: string }
     */
    zipCode: (zipCode, country = '') => {
        const sanitized = sanitizers.trimAndNormalize(zipCode);

        // Postal code is optional for some countries (like UAE)
        if (!sanitized) {
            return { isValid: true, error: '', sanitized: '' };
        }

        if (sanitized.length < 3) {
            return { isValid: false, error: 'Postal code must be at least 3 characters' };
        }

        if (sanitized.length > 10) {
            return { isValid: false, error: 'Postal code must not exceed 10 characters' };
        }

        if (!VALIDATION_PATTERNS.postalCode.test(sanitized)) {
            return { isValid: false, error: 'Postal code contains invalid characters' };
        }

        return { isValid: true, error: '', sanitized };
    },

    /**
     * Validate payment method
     * @param {string} paymentMethod - Payment method to validate
     * @returns {Object} { isValid: boolean, error: string }
     */
    paymentMethod: (paymentMethod) => {
        const validMethods = ['stripe', 'tamara'];

        if (!paymentMethod) {
            return { isValid: false, error: 'Payment method is required' };
        }

        if (!validMethods.includes(paymentMethod)) {
            return { isValid: false, error: 'Invalid payment method selected' };
        }

        return { isValid: true, error: '', sanitized: paymentMethod };
    },

    /**
     * Validate quantity
     * @param {number} quantity - Quantity to validate
     * @param {number} maxQuantity - Maximum allowed quantity
     * @returns {Object} { isValid: boolean, error: string }
     */
    quantity: (quantity, maxQuantity = 100) => {
        const numQuantity = parseInt(quantity, 10);

        if (isNaN(numQuantity)) {
            return { isValid: false, error: 'Quantity must be a number' };
        }

        if (numQuantity < 1) {
            return { isValid: false, error: 'Quantity must be at least 1' };
        }

        if (numQuantity > maxQuantity) {
            return { isValid: false, error: `Quantity cannot exceed ${maxQuantity}` };
        }

        return { isValid: true, error: '', sanitized: numQuantity };
    },
};

/**
 * Validate entire order form
 * @param {Object} formData - Form data to validate
 * @returns {Object} { isValid: boolean, errors: Object, sanitizedData: Object }
 */
export const validateOrderForm = (formData) => {
    const errors = {};
    const sanitizedData = {};
    let isValid = true;

    // Validate first name
    const firstNameResult = validators.firstName(formData.firstName);
    if (!firstNameResult.isValid) {
        errors.firstName = firstNameResult.error;
        isValid = false;
    } else {
        sanitizedData.firstName = firstNameResult.sanitized;
    }

    // Validate last name
    const lastNameResult = validators.lastName(formData.lastName);
    if (!lastNameResult.isValid) {
        errors.lastName = lastNameResult.error;
        isValid = false;
    } else {
        sanitizedData.lastName = lastNameResult.sanitized;
    }

    // Validate email
    const emailResult = validators.email(formData.email);
    if (!emailResult.isValid) {
        errors.email = emailResult.error;
        isValid = false;
    } else {
        sanitizedData.email = emailResult.sanitized;
    }

    // Validate phone
    const phoneResult = validators.phone(formData.phone);
    if (!phoneResult.isValid) {
        errors.phone = phoneResult.error;
        isValid = false;
    } else {
        sanitizedData.phone = phoneResult.sanitized;
    }

    // Validate address
    const addressResult = validators.address(formData.address);
    if (!addressResult.isValid) {
        errors.address = addressResult.error;
        isValid = false;
    } else {
        sanitizedData.address = addressResult.sanitized;
    }

    // Validate city
    const cityResult = validators.city(formData.city);
    if (!cityResult.isValid) {
        errors.city = cityResult.error;
        isValid = false;
    } else {
        sanitizedData.city = cityResult.sanitized;
    }

    // Validate state (optional)
    const stateResult = validators.state(formData.state);
    if (!stateResult.isValid) {
        errors.state = stateResult.error;
        isValid = false;
    } else {
        sanitizedData.state = stateResult.sanitized;
    }

    // Validate country
    const countryResult = validators.country(formData.country);
    if (!countryResult.isValid) {
        errors.country = countryResult.error;
        isValid = false;
    } else {
        sanitizedData.country = countryResult.sanitized;
    }

    // Validate zip code (optional)
    const zipCodeResult = validators.zipCode(formData.zipCode, formData.country);
    if (!zipCodeResult.isValid) {
        errors.zipCode = zipCodeResult.error;
        isValid = false;
    } else {
        sanitizedData.zipCode = zipCodeResult.sanitized;
    }

    // Validate payment method
    const paymentMethodResult = validators.paymentMethod(formData.paymentMethod);
    if (!paymentMethodResult.isValid) {
        errors.paymentMethod = paymentMethodResult.error;
        isValid = false;
    } else {
        sanitizedData.paymentMethod = paymentMethodResult.sanitized;
    }

    return {
        isValid,
        errors,
        sanitizedData,
    };
};

/**
 * Validate a single field
 * @param {string} fieldName - Name of the field to validate
 * @param {any} value - Value to validate
 * @param {Object} context - Additional context (e.g., country for phone validation)
 * @returns {Object} { isValid: boolean, error: string, sanitized: any }
 */
export const validateField = (fieldName, value, context = {}) => {
    if (validators[fieldName]) {
        return validators[fieldName](value, context.country || context.countryCode);
    }

    return { isValid: true, error: '', sanitized: value };
};

/**
 * Get country code from country name
 * @param {string} country - Country name
 * @returns {string} Country code
 */
export const getCountryCode = (country) => {
    const countryCodeMap = {
        'United Arab Emirates': '+971',
        'Saudi Arabia': '+966',
        'Kuwait': '+965',
        'Qatar': '+974',
        'Bahrain': '+973',
        'Oman': '+968',
    };

    return countryCodeMap[country] || '+971';
};

// Export individual validators for granular use
export { validators, sanitizers };

export default {
    validateOrderForm,
    validateField,
    validators,
    sanitizers,
    getCountryCode,
};
