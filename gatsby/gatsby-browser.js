import React from 'react';
import Layout from './src/components/Layout';
import './src/styles/style.scss';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}> {element} </Layout>;
}
