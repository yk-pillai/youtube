import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { LuVideotape } from 'react-icons/lu'
import { MdLiveHelp, MdReportGmailerrorred, MdSubscriptions } from "react-icons/md";
import { BsFillPersonLinesFill, BsLightbulb, BsNewspaper } from "react-icons/bs";
import { GrHistory, GrSettingsOption } from "react-icons/gr";
import { FiHelpCircle, FiTrendingUp } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { GiFilmSpool } from "react-icons/gi";

import styled from 'styled-components';

const List = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: larger;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Sidebar = () => {
  const isHamMenuOpen = useSelector(store => store.app.isHamMenuOpen);
  if(!isHamMenuOpen) return null;
  return (
    <div className="w-[12.5%] p-2 mt-[70px] fixed">
      <ul className="py-5">
        <Link to="/">
          <List>
            <AiOutlineHome />
            Home
          </List>
        </Link>
        <List>
          <LuVideotape />
          Shorts
        </List>
        <List>
          <MdSubscriptions />
          Subscription
        </List>
      </ul>
      <ul className="border border-y-gray-400 border-x-0 py-5">
        <List>
          <BsFillPersonLinesFill />
          You
        </List>
        <List>
          <GrHistory />
          History
        </List>
      </ul>
      <div className="border border-b-gray-400 border-x-0 py-5">
        <h1 className='text-lg font-bold'>Explore</h1>
        <ul>
          <List><FiTrendingUp/>Trending</List>
          <List><HiOutlineShoppingBag/>Shopping</List>
          <List><BsMusicNoteBeamed/>Music</List>
          <List><GiFilmSpool/>Film</List>
          <List><MdLiveHelp/>Live</List>
          <List><BsNewspaper/>News</List>
        </ul>
      </div>
      <ul className=" py-5">
        <List>
          <GrSettingsOption />
          Settings
        </List>
        <List>
          <MdReportGmailerrorred />
          Report
        </List>
        <List>
          <FiHelpCircle />
          Help
        </List>
        <List>
          <BsLightbulb />
          Light mode
        </List>
      </ul>
    </div>
  );
}

export default Sidebar
