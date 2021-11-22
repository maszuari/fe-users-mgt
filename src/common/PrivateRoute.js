import { Navigate } from 'react-router-dom'
import useAuth from './useAuth'

export default function PrivateRoute({ element, path }) {
  const { user } = useAuth();
  const ele = user !== null
    ? element
    : <Navigate to="/" 
      replace
      state={{ path }} />;

  return <Route path={path} element={ele} />;
}