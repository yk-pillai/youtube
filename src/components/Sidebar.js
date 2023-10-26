import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isHamMenuOpen = useSelector(store => store.app.isHamMenuOpen);
  if(!isHamMenuOpen) return null;
  return (
    <div className="w-48 shadow-lg p-2 mt-[70px]">
      <ul className="py-2">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul className="border border-y-black border-x-0 py-2">
        <li>Library</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Liked videos</li>
        <li>Show more</li>
      </ul>
      <div className="border border-b-black border-x-0 py-2">
        <h1>Subscriptions</h1>
        <ul>
          <li>NASA</li>
          <li>WatchMojo.com</li>
          <li>Doctor Mike</li>
          <li>Akshay Saini</li>
          <li>Anshuman Sharma</li>
          <li>The Urban Guide</li>
          <li>Show more</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar
