import { UsuarioProvider } from "common/Usuario";
import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function MyRoutes(){
    return(

<BrowserRouter>
<Switch>
    <UsuarioProvider>
    <Route exact path='/'>
        <Login/>
    </Route>
    <Route exact path='/feira'>
        <Feira />
    </Route>
    </UsuarioProvider>
    <Route exact path='/carrinho'>
        <Carrinho/>
    </Route>
    

</Switch>
</BrowserRouter>
    )
}