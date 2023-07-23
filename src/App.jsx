import { Navbar, Welcome, Footer, Services, Transactions, ScrollToTopButton,FAQ,Strategy,FooterReel} from "./components";
import React, { useState } from 'react';

const App = () =>{
  const [valueRef, setValue] = useState('');

  const handleChildEvent = (value) => {
    // 处理从自组件传递过来的值
    setValue(value)
    console.log('Value from child:', valueRef);
  };
  return(
  
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar   />
        <Welcome  />
      </div>
      <Services  />
      <Transactions  />
      <Footer />
      <FAQ />
      <Strategy />
      <FooterReel/>
      <ScrollToTopButton />
    </div>
  );
  
} 

export default App;
