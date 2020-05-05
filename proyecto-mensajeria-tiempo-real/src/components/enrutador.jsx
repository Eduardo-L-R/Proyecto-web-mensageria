import React from 'react';
import {Route, Switch} from 'react-router-dom'
import IniciarSession from './iniciar-sesion/SignIn';
import Registrarse from './registrarse/SignUp';
import PanelDeInicio from './panel-inicio/PanelDeInicio';


export const Enrutador = ()=>{
    return(
        <Switch>
            <Route exact path="/">
                <IniciarSession />
            </Route>
            <Route path="/Inicio">
                <IniciarSession />
            </Route>
            <Route path="/Registro">
                <Registrarse />
            </Route>
            <Route path="/Panel-Inicio">
                <PanelDeInicio />
            </Route>
        </Switch>
    )
};

export default Enrutador;