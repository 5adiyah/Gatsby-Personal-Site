import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import '../styles/styles.scss';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
