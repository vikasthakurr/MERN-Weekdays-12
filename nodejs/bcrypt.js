/*
  -----------------------------------------------------------------------------
  Password Hashing (Bcrypt):
  -----------------------------------------------------------------------------
  - Hashing is the process of converting a given key (like a password) into another value.
  - A hash function is essential for security; it ensures that even if a database 
    is compromised, attackers cannot see the actual user passwords.
  - Hashing is a one-way process: You can generate a hash from a password, 
    but you cannot retrieve the password from the hash.

  -----------------------------------------------------------------------------
  Why use Bcrypt?
  -----------------------------------------------------------------------------
  - Bcrypt is a popular hashing algorithm designed specifically for password security.
  - It incorporates a "salt" to protect against rainbow table attacks.
  - Salt: A random string added to the password before hashing. 
    This ensures that two users with the same password will have different hashes.
  - Work Factor (Salt Rounds): Determines how slow the hashing calculation is. 
    Slower is better for security (makes brute-force attacks harder).

  -----------------------------------------------------------------------------
  Key Methods:
  -----------------------------------------------------------------------------
  1. bcrypt.hash(password, saltRounds): Asynchronously generates a hash for the password.
  2. bcrypt.compare(password, hash): Asynchronously checks if a plaintext password 
     matches a given hash.
*/

import bcrypt from "bcryptjs"; // Importing the bcryptjs library

const password = "mySuperSecretPassword123";
const saltRounds = 10; // The cost factor (higher is safer but slower)

// ----------------------------------------------------------------------------
// 1. Hashing a Password:
// ----------------------------------------------------------------------------
// We use an immediately invoked async function to demonstrate async/await usage

(async () => {
  try {
    console.log("Original Password:", password);

    // Generate a salt and hash the password in one go
    // 'saltRounds' determines the complexity of the hash
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    console.log("Hashed Password:", hashedPassword);

    // ----------------------------------------------------------------------------
    // 2. Verifying a Password:
    // ----------------------------------------------------------------------------
    // To login, we compare the user-provided password with the stored hash.

    const inputPasswordStart = "mySuperSecretPassword123"; // Correct password
    const inputPasswordWrong = "wrongPassword"; // Incorrect password

    // Check Correct Password
    const isMatch = await bcrypt.compare(inputPasswordStart, hashedPassword);
    console.log(`Did the password '${inputPasswordStart}' match?`, isMatch); // true

    // Check Wrong Password
    const isMatchWrong = await bcrypt.compare(
      inputPasswordWrong,
      hashedPassword,
    );
    console.log(
      `Did the password '${inputPasswordWrong}' match?`,
      isMatchWrong,
    ); // false
  } catch (error) {
    console.error("Error:", error);
  }
})();
