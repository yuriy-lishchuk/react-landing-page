import React, { Fragment } from 'react';
import { Hidden } from '@material-ui/core';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';

function MainLayout({ children }: any) {
  return (
    <Fragment>
			<Hidden smDown>
				<Header />
			</Hidden>
			<Hidden mdUp>
				<HeaderMobile />
			</Hidden>
      <div>{children}</div>
    </Fragment>
  );
}

export default MainLayout;
