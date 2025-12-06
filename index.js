// createLoginTracker function
function createLoginTracker(userInfo) {
    // Step 1: Track number of attempts
    let attemptCount = 0;

    // Step 2: Inner arrow function (closure)
    const loginAttempt = (passwordAttempt) => {
        // Increase attempt count every time function is called
        attemptCount++;

        // If more than 3 attempts => account locked
        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Check if password is correct
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            return `Attempt ${attemptCount}: Login failed`;
        }
    };

    // Return the inner function
    return loginAttempt;
}

// Export function (if tests need it)
module.exports = createLoginTracker;





// Example test:
const tracker = createLoginTracker({ username: "user1", password: "password123" });

console.log(tracker("wrongpass"));      // Attempt 1: Login failed
console.log(tracker("12345"));          // Attempt 2: Login failed
console.log(tracker("password123"));    // Login successful
console.log(tracker("anything"));       // Account locked due to too many failed login attempts
