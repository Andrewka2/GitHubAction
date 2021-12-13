import React from 'react';
import './App.scss';
import { Protocol } from './pages/Protocol';
import { Explorer } from './pages/Explorer';
import { CreateAuction } from './pages/CreateAuction';
import { MyCollection } from './pages/MyCollection';
import { Faq } from './pages/Faq';
import { Auction } from './pages/Auction';
import { Flash } from './pages/Flash';
import { ItemPages } from './pages/ItemPages';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Protocol/>}/>
          <Route path="/explore" element={<Explorer/>}/>
          <Route path="/auction" element={<Auction/>}/>
          <Route path="/my-collection" element={<MyCollection/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/create-auction" element={<CreateAuction/>}/>
          <Route path={"/flash"} element={<Flash/>}/>
          <Route path={"/item-page"} element={<ItemPages/>}/>
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;
