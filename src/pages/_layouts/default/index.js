import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { useHistory } from "react-router-dom";


import Header from '~/components/Header';
import Footer from '~/components/Footer';

// import { Wrapper } from './styles';;

export default function DefaultLayout({ children }) {

  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  }

  const redirectToAbout = () => {
    console.log("awdkaowdkaowkd")
    history.push("/sobre-nos");
  }

  const redirectToPosts = () => {
    console.log("awdkaowdkaowkd")
    history.push("/sobre-nos");
  }

  const redirectToEvents = () => {
    history.push("/sobre-nos");
  }


  useEffect(() => {
    ReactDOM.render(<Header redirectToHome={redirectToHome} redirectToAbout={redirectToAbout} redirectToPosts={redirectToPosts} redirectToEvents={redirectToEvents} />, document.getElementById('pageTop'))
  }, [redirectToAbout, redirectToEvents, redirectToHome, redirectToPosts]);

  return (
    // <Wrapper>
    //   
    // </Wrapper>
    
    <>
      {children}
      <Footer />
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}