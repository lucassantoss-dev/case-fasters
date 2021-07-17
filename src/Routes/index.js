import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../components/HomePage';
import PaginaEmpresa from '../pages/empresa/PaginaEmpresa';
import PaginaCamisaria from '../pages/camisaria/PaginaCamisaria';
import PaginaAlfaiataria from '../pages/alfaiataria/PaginaAlfaiataria';
import PaginaDepoimentos from '../pages/depoimentos/PaginaDepoimentos';
import PaginaContato from '../pages/contato/PaginaContato';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ HomePage } />
            <Route path='/empresa' component={ PaginaEmpresa } />
            <Route path='/camisaria' component={ PaginaCamisaria } />
            <Route path='/alfaiataria' component={ PaginaAlfaiataria } />
            <Route path='/depoimentos' component={ PaginaDepoimentos } />
            <Route path='/contato' component={ PaginaContato } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;