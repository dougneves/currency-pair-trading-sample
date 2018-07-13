import React from 'react';
import AccountBalance from './account-balance';
import Trade from './trade';

export default function(props) {
  return (
    <main>
      <AccountBalance />
      <Trade />
    </main>
  );
}
