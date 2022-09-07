import React from 'react';

import './Exercice1.css';

import Header from './comp1/header.component';
import Info from './comp1/info.component';
import Changes from './comp1/changes.component';
import Solution from './comp1/solution.component';
import More from './comp1/more.component';
import Footer from './comp1/footer.component';

function Exercice1() {
  return <div>
    <Header />
    <Info />
    <Changes />
    <Solution />
    <More />
    <Footer />
  </div>;
}

export default Exercice1;
