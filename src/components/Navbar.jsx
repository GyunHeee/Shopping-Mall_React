import React from 'react';
import { BiUpsideDown } from 'react-icons/bi';
import { BsFillPencilFill } from 'react-icons/bs';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
import Button from './ui/Button';
import User from './User';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  const navigate = useNavigate();

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <div
        className="flex items-center text-4xl text-brand"
        onClick={() => navigate('/')}
      >
        <BiUpsideDown />
        <h1 className="cursor-pointer">Moomin</h1>
      </div>
      <nav className="flex items-center gap-4 font-semibold">
        <h2 onClick={() => navigate('/products')} className="cursor-pointer">
          products
        </h2>
        {user && <Link to="/carts">Carts</Link>}
        {user && user.isAdmin && (
          <BsFillPencilFill
            onClick={() => navigate('/products/new')}
            className="cursor-pointer"
          />
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </nav>
    </header>
  );
}
