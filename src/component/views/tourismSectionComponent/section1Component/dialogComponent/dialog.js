import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ModalButton from "../buttonComponent/modalButton";
import "./dialog.css";

const ScrollDialog = props => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <ModalButton submit={handleClickOpen("paper")} />
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title">
          {props.feacture.title}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText className="dialogContent">
            <img
              src={require(`../../../../.././asset/images/tourismSection/${props.feacture.image}`)}
              alt={props.feacture.image}
              className="img-fluid"
            />
            <p>{props.feacture.content}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ScrollDialog;
