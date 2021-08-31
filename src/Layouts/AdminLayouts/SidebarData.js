import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
  {
    title: 'Home',
    path: '/admin/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Categories',
    path: '/admin/categories',
    icon: <FaIcons.FaThLarge />,
    cName: 'nav-text'
  },
  {
    title: 'Articles',
    path: '/admin/articles',
    icon: <FaIcons.FaFileAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Services',
    path: '/admin/services',
    icon: <FaIcons.FaHandHoldingUsd />,
    cName: 'nav-text'
  },
  {
    title: 'Activities',
    path: '/admin/activities',
    icon: <FaIcons.FaWalking />,
    cName: 'nav-text'
  },
  {
    title: 'Service Owners',
    path: '/admin/profiles',
    icon: <FaIcons.FaUsers />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/admin/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Notifications',
    path: '/admin/notifications',
    icon: <FaIcons.FaBell />,
    cName: 'nav-text'
  }
];
