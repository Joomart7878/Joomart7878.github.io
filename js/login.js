type="text/javascript">
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const messageDiv = document.getElementById('message');

        messageDiv.textContent = ''; // Clear previous messages
        messageDiv.classList.remove('text-red-500', 'text-green-500');

        // --- Placeholder for actual authentication logic ---
        // In a real application, you would send this data to a backend server
        // or use a client-side authentication SDK (like Firebase Auth).
        // For now, we'll just simulate a successful/failed login.

        if (username === 'user@example.com' && password === 'password123') {
            messageDiv.textContent = 'Login successful!';
            messageDiv.classList.add('text-green-500');
            // In a real app, you would redirect the user or load protected content
            console.log('Login successful for:', username);
        } else {
            messageDiv.textContent = 'Invalid username or password.';
            messageDiv.classList.add('text-red-500');
            console.log('Login failed for:', username);
        }
    });