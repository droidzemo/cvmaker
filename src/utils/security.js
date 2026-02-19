/**
 * Recursively removes keys that could lead to prototype pollution.
 * @param {any} data - The data to sanitize.
 * @returns {any} The sanitized data.
 */
export function sanitizeData(data) {
    if (Array.isArray(data)) {
        return data.map(sanitizeData);
    } else if (data !== null && typeof data === 'object') {
        const sanitized = {};
        for (const [key, value] of Object.entries(data)) {
            if (key === '__proto__' || key === 'constructor') {
                continue;
            }
            sanitized[key] = sanitizeData(value);
        }
        return sanitized;
    }
    return data;
}

/**
 * Validates the basic structure of a CV object.
 * @param {any} data - The data to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateCVStructure(data) {
    if (!data || typeof data !== 'object') return false;

    const requiredFields = ['personal', 'experience', 'education', 'skills'];
    for (const field of requiredFields) {
        if (!(field in data)) return false;
    }

    if (typeof data.personal !== 'object' || data.personal === null) return false;
    if (!Array.isArray(data.experience)) return false;
    if (!Array.isArray(data.education)) return false;
    if (!Array.isArray(data.skills)) return false;

    return true;
}
