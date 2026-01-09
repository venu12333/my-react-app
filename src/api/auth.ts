/**
 * Authentication API module
 * Handles user authentication, session management, and token operations
 */

export interface AuthResponse {
  success: boolean;
  token: string;
  user: {
    email: string;
    name: string;
    id: string;
  };
  message?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Simulates API call to authenticate user
 * In production, this would call a real backend API
 */
export const authenticateUser = async (
  email: string,
  password: string,
  _rememberMe: boolean = false
): Promise<AuthResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Mock authentication logic
  // Valid credentials for testing
  const validUsers = [
    {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
      id: 'user-001',
    },
    {
      email: 'admin@example.com',
      password: 'Admin@123',
      name: 'Admin User',
      id: 'user-002',
    },
    {
      email: 'john.doe@example.com',
      password: 'SecurePass123!',
      name: 'John Doe',
      id: 'user-003',
    },
  ];

  const user = validUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    // Generate mock JWT token
    const token = `mock-jwt-token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    return {
      success: true,
      token,
      user: {
        email: user.email,
        name: user.name,
        id: user.id,
      },
    };
  }

  // Check for specific error cases
  const userExists = validUsers.some((u) => u.email === email);
  
  if (userExists) {
    return {
      success: false,
      token: '',
      user: { email: '', name: '', id: '' },
      message: 'Invalid password. Please try again.',
    };
  }

  return {
    success: false,
    token: '',
    user: { email: '', name: '', id: '' },
    message: 'No account found with this email address.',
  };
};

/**
 * Logs out the current user by clearing session data
 */
export const logoutUser = (): void => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userEmail');
  sessionStorage.removeItem('authToken');
  sessionStorage.removeItem('userEmail');
};

/**
 * Checks if user is currently authenticated
 */
export const isAuthenticated = (): boolean => {
  const token =
    localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
  return !!token;
};

/**
 * Gets the current user's email from storage
 */
export const getCurrentUserEmail = (): string | null => {
  return (
    localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail')
  );
};

/**
 * Validates authentication token
 * In production, this would verify with backend
 */
export const validateToken = async (token: string): Promise<boolean> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  // Mock validation - check if token exists and is not expired
  return token.startsWith('mock-jwt-token-');
};

/**
 * Refreshes authentication token
 * In production, this would call refresh token endpoint
 */
export const refreshAuthToken = async (): Promise<string | null> => {
  const currentToken =
    localStorage.getItem('authToken') || sessionStorage.getItem('authToken');

  if (!currentToken) {
    return null;
  }

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Generate new token
  const newToken = `mock-jwt-token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // Update storage
  if (localStorage.getItem('authToken')) {
    localStorage.setItem('authToken', newToken);
  } else {
    sessionStorage.setItem('authToken', newToken);
  }

  return newToken;
};
