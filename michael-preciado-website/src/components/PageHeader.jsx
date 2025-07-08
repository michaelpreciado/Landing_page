import React from 'react';
import ReturnButton from './ReturnButton';
import PageNavButton from './PageNavButton';

function PageHeader({ navTo, navText }) {
  return (
    <header className="page-header">
      <ReturnButton />
      <PageNavButton to={navTo} text={navText} />
    </header>
  );
}

export default PageHeader; 