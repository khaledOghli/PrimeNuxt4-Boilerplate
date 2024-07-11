interface UserSession {
  token: string | null
}
export function useUserSession() {
  const session: Ref<UserSession> = ref({
    token: null,
  });

  const setSession = (newSession: UserSession) => {
    session.value = newSession;
  };

  const clearSession = () => {
    session.value = {
      token: null,
    };
  };

  const isAuthenticated = computed(() => !!session.value.token);

  return {
    session,
    setSession,
    clearSession,
    isAuthenticated,
  };
}
