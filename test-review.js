// Test file for Sentinel AI review

function add(a, b) {
    return a + b;
}

// Missing input validation - division by zero risk
function divide(a, b) {
    return a / b;
}

// Potential SQL injection vulnerability
function getUser(userInput) {
    const query = "SELECT * FROM users WHERE name = '" + userInput + "'";
    return db.execute(query);
}

// Unused variable and missing error handling
function fetchData(url) {
    const result = fetch(url);
    const unused = 42;
    return result;
}

module.exports = { add, divide, getUser, fetchData };
