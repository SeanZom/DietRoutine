import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
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
import Select from "@material-ui/core/Select";
import FilledInput from "@material-ui/core/FilledInput";
import CircularProgress from "@material-ui/core/CircularProgress";

import DataText from "./DataText";
import {
  fetchCommonDetail,
  fetchBrandedDetail,
  setOpenDialog
} from "../actions";

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
  },
  dialogTitleSubtitle: {
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { classes, onClose, imgSrc, title, subTitle } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <div className={classes.thumbContainer}>
        <img
          className={classes.thumb}
          src={imgSrc}
          alt={title}
          width={72}
          height={72}
        />
        <Typography variant="h5">{title}</Typography>
        {subTitle && <p className={classes.dialogTitleSubtitle}>{subTitle}</p>}
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
    padding: theme.spacing(1, 2, 2, 2)
  }
}))(MuiDialogActions);

const LoadingIndicator = ({ classes }) => {
  return (
    <div className={classes.progress}>
      <CircularProgress />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  paperWidthSm: {
    width: 320
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
    padding: "16px 12px"
  },
  selectContainer: {
    backgroundColor: "#e8e8e8",
    borderRadius: 4,
    margin: theme.spacing(1, 0)
  },
  selectInput: {
    color: theme.palette.text.secondary
  },
  progress: {
    marginTop: 10,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
    borderRadius: 4
  }
}));

const DetailDialog = ({
  open,
  food,
  isCommon,
  apiQuery,
  nutrient,
  fetchCommonDetail,
  fetchBrandedDetail,
  setOpenDialog
}) => {
  const classes = useStyles();

  const [addTo, setAddTo] = useState('breakfast');
  const [servings, setServings] = useState(0);
  const [grams, setGrams] = useState(0);
  const [calories, setCalories] = useState(0);

  const updateServings = value => {
    setServings(value);
    const qty = calcFormatServings(value);
    updateGrams(qty);
    updateCalories(qty);
  };

  const formatServings = () => {
    setServings(calcFormatServings(servings));
  };

  const updateGrams = qty => {
    const newGrams = nutrient.serving_weight_grams * qty;
    setGrams(Math.round(newGrams));
  };

  const updateCalories = qty => {
    const newCaloires = nutrient.nf_calories * qty;
    setCalories(Math.round(newCaloires));
  };

  const calcFormatServings = value => {
    const qty = nutrient.serving_qty;
    let newVal;
    if (value < qty) {
      newVal = qty;
    } else {
      newVal = Math.round(value / qty) * qty;
    }
    return newVal;
  };

  const onCounterClick = (operation) => {
    let newVal;
    if (operation === 'add') {
      newVal = servings + nutrient.serving_qty;
    } else {
      newVal = servings - nutrient.serving_qty;
      if (newVal < nutrient.serving_qty) {
        newVal = nutrient.serving_qty;
      }
    }
    updateServings(newVal);
  }

  useEffect(() => {
    if (open && !nutrient) {

      if (isCommon) {
        fetchCommonDetail(apiQuery);
      } else {
        fetchBrandedDetail(apiQuery)
      }
    }
    if (nutrient) {
      updateServings(nutrient.serving_qty);
    }
  }, [open, nutrient]);

  if (!food) {
    return null;
  }

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="detail-dialog-title"
      classes={{ paperWidthSm: classes.paperWidthSm }}
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
        imgSrc={food.photo.thumb}
        title={food["food_name"]}
        subTitle={food["brand_name"]}
      />

      {!nutrient ? (
        <DialogContent>
          <LoadingIndicator classes={classes} />
        </DialogContent>
      ) : (
        <>
          <DialogContent>
            <div>
              <div className={classes.calcContainer}>
                <TextField
                  id="filled-servings"
                  label="Servings"
                  value={servings}
                  onChange={e => updateServings(e.target.value)}
                  helperText={food["serving_unit"].split(" ")[0]}
                  margin="none"
                  variant="filled"
                  type="number"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <div className={classes.counter}>
                          <IconButton aria-label="add" size="small" onClick={() => onCounterClick('add')}>
                            <ArrowUpIcon fontSize="inherit" />
                          </IconButton>
                          <IconButton aria-label="sub" size="small" onClick={() => onCounterClick('sub')}>
                            <ArrowDownIcon fontSize="inherit" />
                          </IconButton>
                        </div>
                      </InputAdornment>
                    ),
                    onBlur: formatServings
                  }}
                  inputProps={{
                    min: nutrient.serving_qty,
                    step: nutrient.serving_qty
                  }}
                />
                <div className={classes.dataContainer}>
                  <DataText primary={grams} secondary="grams" textAlign="end" />
                </div>
                <div className={classes.dataContainer}>
                  <DataText
                    primary={calories}
                    secondary="calories"
                    textAlign="end"
                  />
                </div>
              </div>

              <div className={classes.addContainer}>
                <p className={classes.fieldHeader}>Add To Today</p>
                <Select
                  className={classes.selectContainer}
                  classes={{ root: classes.select }}
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
                      classes={{ input: classes.selectInput }}
                    />
                  }
                >
                  <option value='breakfast'>Breakfast</option>
                  <option value='lunch'>Lunch</option>
                  <option value='dinner'>Dinner</option>
                  <option value='snack'>Snack</option>
                </Select>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={handleClose}
              color="primary"
              size="large"
            >
              Add
            </Button>
          </DialogActions>{" "}
        </>
      )}
    </Dialog>
  );
};

const mapStateToProps = state => {
  const food = state.base.selectedFood;
  let nutrient;
  let detailKey;
  let isCommon = true;
  if (food) {
    isCommon = !_.has(food, "nix_item_id");
    detailKey = isCommon ? food["food_name"] : food["nix_item_id"];
    const detail = state.details[detailKey];

    if (detail) {
      nutrient = _.pick(detail, [
        "serving_qty",
        "serving_weight_grams",
        "nf_calories"
      ]);
    }
  }

  return {
    isCommon: isCommon,
    apiQuery: detailKey,
    nutrient: nutrient,
    open: state.base.isOpenDialog,
    food: state.base.selectedFood
  };
};

export default connect(
  mapStateToProps,
  { fetchCommonDetail, fetchBrandedDetail, setOpenDialog }
)(DetailDialog);
