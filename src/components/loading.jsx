/* Importa la libreria principal de react*/
import React from 'react';
/* Importa los componentes de MUUI BackDrop y CircularProgress (loading icon) */
import {Backdrop, CircularProgress} from '@mui/material';

/* importa una extensión de los estilos de MUI */
// import useStyles from './loading.css.jsx'

const Loading = (props) =>  {

  /*
    este componente no requiere un estado propio, por eso prescinde de useState hook.
    el componente es renderizado solo cuando cambia la propiedad  open [true|false]
  */
  const open = typeof(props.open) == "undefined" ? true : props.open;
  return (
    /* Backdrop y CircularProgress son componentes de MUi, ver api y docs en la web oficial */
    <Backdrop style={{ color: '#fff' }} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loading;