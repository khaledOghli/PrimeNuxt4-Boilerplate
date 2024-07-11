import type { AuthUser } from '~/stores/auth';

// Define the types for the function parameters and return values
interface AuthStorageOptions {
  authTokenKey?: string
  authUserKey?: string
}

interface AuthStorageReturn {
  store: (newToken: string, newUser: AuthUser) => void
  clear: () => void
  user: Ref<AuthUser | null>
  token: Ref<string>
}

// The main composable function with enhanced default parameter handling
export function useAuthStorage({
  authTokenKey = 'auth.token',
  authUserKey = 'auth.user',
}: AuthStorageOptions = {}): AuthStorageReturn {
  const user = useCookie<AuthUser | null>(authUserKey, { default: () => null });
  const token = useCookie<string>(authTokenKey, { default: () => '' });

  const store = (newToken: string, newUser: AuthUser) => {
    try {
      token.value = newToken;
      user.value = newUser;
    }
    catch (error) {
      console.error('Error storing auth data:', error);
    }
  };

  const clear = () => {
    try {
      user.value = null;
      token.value = '';
    }
    catch (error) {
      console.error('Error clearing auth data:', error);
    }
  };

  return { store, clear, user, token };
}
