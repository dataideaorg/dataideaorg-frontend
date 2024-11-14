interface RegisterData {
    username: string;
    email: string;
    password: string;
}

interface LoginData {
    username: string;
    password: string;
}

interface AuthResponse {
    access: string;
    refresh: string;
}

// Register User
export const register = async (data: RegisterData): Promise<void> => {
    const response = await fetch('http://localhost:8000/accounts/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Error registering user');
    }
};

// Login User
export const login = async (data: LoginData): Promise<AuthResponse> => {
    const response = await fetch('http://localhost:8000/accounts/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Invalid credentials');
    }

    const responseData: AuthResponse = await response.json();
    return responseData;
};
