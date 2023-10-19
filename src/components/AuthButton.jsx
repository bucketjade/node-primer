import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';

const SignInButton = () => (
  <button className="ms-auto btn btn-dark btn-lg" onClick={signInWithGoogle}>Sign in</button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-dark btn-lg" onClick={signOut}>Sign out</button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

// const Navigation = () => (
//   <nav className="d-flex">
//     {/* <NavLink to="/" className={activation} end>Posts</NavLink> */}
//     {/* <NavLink to="/users" className={activation} end>Users</NavLink> */}
//     <AuthButton />
//   </nav>
// );

// export default Navigation;
export default AuthButton;