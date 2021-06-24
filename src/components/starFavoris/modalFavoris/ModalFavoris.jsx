import { makeStyles, Modal } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router';


const ModalFavoris = ({favorisModal,handleModalFavoris}) => {

    function rand() {
        return Math.round(Math.random() * 20) - 10;
      }
      
      function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }
      
      const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));

      const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
     const [modalStyle] = React.useState(getModalStyle);
     let history = useHistory()


    const body = (
        <div style={modalStyle} className={classes.paper}>
          <p id="simple-modal-description">
          Connectez-vous pour ajouter ce film à votre liste de favoris.
          </p>
          <button type="button" onClick={() => history.push('/login')} >
          Se connecter
         </button>
         <button type="button" onClick={handleModalFavoris}>
                Fermer         
            </button>
        </div>
      );


    return (
        <>
        <Modal      open={favorisModal}
                    // onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
            >
                {body}
          </Modal>

        <h1>Fuck</h1>
        </>
    )
}


export default ModalFavoris