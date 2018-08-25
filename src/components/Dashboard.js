import React from 'react';
import S from '../components/styles/styles.js'
import Header from './Header'
import Footer from './Footer'


import DrumSetContainer from './DrumSets/DrumSetContainer';

const Dashboard = () => {
  return (
    <main>
    <Header />
    <S.Wrapper>
      <DrumSetContainer />
    </S.Wrapper>
    <Footer />
    </main>
  );
};

export default Dashboard;