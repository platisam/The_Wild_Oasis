import { useUser } from "../features/authentication/useUser";

const ProtectedRoute = ({ children }) => {
  // 1. Load the authenticated user
  const { user, isLoading } = useUser();

  // 2. While loading, show a spinner

  // 3. If there is NO authenticated user, redirect to the /login

  // 4. If there IS a user, render the app
  return children;
};
export default ProtectedRoute;
