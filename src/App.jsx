import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Teşekkürler from "./components/Teşekkürler"
import { Route, Switch } from 'react-router-dom';

import Form from './components/Form'
import { useState } from 'react';
function App() {
  
 const [bilgiler, setBilgiler] = useState({isim: "",
 boyut: "",
 hamurTipi: "",
 toppings: [],
 extraNotes: "",
 adet: 1,})
 
  return (
    <>
    <Header />
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/Form' exact>
                    <Form setBilgiler={setBilgiler}/>
                </Route>
                <Route path="/Teşekkürler">
                  <Teşekkürler bilgiler={bilgiler}/>
                </Route>
            </Switch>
    </>
  )
}

export default App
