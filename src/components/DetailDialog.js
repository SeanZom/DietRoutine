import React, {useState} from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MuiDialogContent from "@material-ui/core/DialogContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import ArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';

import DataText from "./DataText";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.primary.main
  },
  thumbContainer: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1.5px solid rgba(0, 0, 0, 0.12)"
  },
  thumb: {
    borderRadius: 6
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <div className={classes.thumbContainer}>
        <img
          className={classes.thumb}
          src="https://d1r9wva3zcpswd.cloudfront.net/5cc552597f48b489670c02a2.jpeg"
          width={72}
          height={72}
        />
        <Typography variant="h5">{children}</Typography>
      </div>

      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(0, 2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2, 2, 2),
  },
}))(MuiDialogActions);

const useStyles = makeStyles(theme => ({
  paperWidthSm: {
    maxWidth: 320
  },
  counter: {
    display: "flex",
    flexDirection: "column"
  },
  calcContainer: {
    display: "flex",
    alignItems: "flext-start",
    paddingBottom: theme.spacing(3),
    borderBottom: "1.5px solid rgba(0, 0, 0, 0.12)"
  },
  dataContainer: {
    marginLeft: theme.spacing(4)
  },
  fieldHeader: {
    fontSize: "0.9rem",
    fontWeight: 500,
    letterSpacing: ".1rem",
    textTransform: "uppercase",
    color: theme.palette.text.secondary
  },
  addContainer: {
    marginTop: theme.spacing(2)
  },
  select: {
    padding: '16px 12px',
  },
  selectContainer: {
    backgroundColor: '#e8e8e8',
    borderRadius: 4,
    margin: theme.spacing(1, 0),
  },
  selectInput: {
    color: theme.palette.text.secondary,
  }
}));

const DetailDialog = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [addTo, setAddTo] = useState(1);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="detail-dialog-title"
      classes={{ paperWidthSm: classes.paperWidthSm }}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Modal title
      </DialogTitle>
      <DialogContent>
        <div>
          <div className={classes.calcContainer}>
            <TextField
              id="filled-servings"
              label="Servings"
              defaultValue="1.0"
              helperText="slice"
              margin="none"
              variant="filled"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <div className={classes.counter}>
                      <IconButton aria-label="add" size="small">
                        <ArrowUpIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton aria-label="sub" size="small">
                        <ArrowDownIcon fontSize="inherit" />
                      </IconButton>
                    </div>
                  </InputAdornment>
                )
              }}
            />
            <div className={classes.dataContainer}>
              <DataText primary="28" secondary="grams" alignItems="end" />
            </div>
            <div className={classes.dataContainer}>
              <DataText primary="113" secondary="calories" alignItems="end" />
            </div>
          </div>

          <div className={classes.addContainer}>
            <p className={classes.fieldHeader}>Add To Today</p>
            <Select
              className={classes.selectContainer}
              classes={{root: classes.select}}
              native
              value={addTo}
              onChange={e => setAddTo(e.target.value)}
              IconComponent={ArrowDownIcon}
              variant="filled"
              input={
                <FilledInput
                  name="addTo"
                  fullWidth
                  disableUnderline
                  classes={{input: classes.selectInput}}
                />
              }
            >
              <option value={1}>Breakfast</option>
              <option value={2}>Lunch</option>
              <option value={3}>Dinner</option>
              <option value={4}>Snack</option>
            </Select>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose} color="primary" size='large'>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailDialog;
