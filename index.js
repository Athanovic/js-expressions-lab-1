/**
 * createLoginTracker - Creates a secure login tracker for a user
 * @param {Object} userInfo - An object containing username and password
 * Example:
 * {
 *   username: "user1",
 *   password: "password123"
 * }
 * @returns {Function} loginAttempt - A function to attempt logging in with a password
 */
function createLoginTracker(userInfo) {
    // Initialize the number of login attempts
    let attemptCount = 0;

    /**
     * loginAttempt - Inner arrow function to handle each login attempt
     * @param {string} passwordAttempt - The password entered by the user
     * @returns {string} - Result message indicating success, failure, or account lock
     */
    const loginAttempt = (passwordAttempt) => {
        // Increment attempt count each time this function is called
        attemptCount++;

        // If more than 3 attempts have been made, lock the account
        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Check if the entered password matches the stored password
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            // Password is incorrect but attempt limit not yet reached
            return `Attempt ${attemptCount}: Login failed`;
        }
    };

    // Return the inner function so it can be used externally
    return loginAttempt;
}

// Export the function for testing purposes (required by the auto-grader)
module.exports = createLoginTracker;

/* -------------------------
 Example Usage (for local testing only)
 Uncomment to test manually in Node.js
----------------------------*/

// const tracker = createLoginTracker({ username: "user1", password: "password123" });
// console.log(tracker("wrongpass"));   // Attempt 1: Login failed
// console.log(tracker("12345"));       // Attempt 2: Login failed
// console.log(tracker("password123")); // Login successful
// console.log(tracker("anything"));    // Account locked due to too many failed login attempts



