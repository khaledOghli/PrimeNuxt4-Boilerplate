const DUMMY_USER = {
  id: 1,
  name: 'John Doe',
  email: 'admin@example.com',
  password: 'admin',
};
// 401 Unauthorized
const unAuthorizedCode = 401;
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.email !== DUMMY_USER.email || body.password !== DUMMY_USER.password) {
    setResponseStatus(event, unAuthorizedCode, 'Unauthenticated');
    return {
      error: 'Unauthenticated',
    };
  }

  return {
    token: `dummy-token-${DUMMY_USER.id}`,
    user: DUMMY_USER,
  };
});
