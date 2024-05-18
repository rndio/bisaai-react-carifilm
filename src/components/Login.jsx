import axios from 'axios';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password });
            const token = response.data.token; // Assuming your API returns the token in the response data
            storeToken(token); // Store the token (explained later)
            // Redirect to protected routes or display success message
        } catch (error) {
            console.error(error);
            // Handle login errors (e.g., invalid credentials)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Username/email and password input fields */}
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginComponent;
