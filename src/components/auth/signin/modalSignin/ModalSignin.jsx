import { makeStyles, Modal } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router';


const ModalSignin = ({signinModal,setsigninModal}) => {

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
          textAlign:'center'
        },
      }));

      const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
     const [modalStyle] = React.useState(getModalStyle);


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Pour tester l'application </h2>
          <p id="simple-modal-description">
              Email: mymovies@test.com
         </p>
         <p id="simple-modal-description"> Mot de passe : azerty4</p>
        </div>
      );

      const handleClose = () => {
        setsigninModal(false);
      };

    return (
        <>
        <Modal      open={signinModal}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
            >
                {body}
          </Modal>

        </>
    )
}


export default ModalSignin