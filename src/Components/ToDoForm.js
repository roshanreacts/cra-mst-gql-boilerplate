import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "./Button";

const TodoForm = (props) => {
  return (
    <Fragment>
      <form>
        <TextField
          variant="outlined"
          placeholder="add todo"
          margin="normal"
        ></TextField>
        <Button name="Go Back" onClick={() => props.signout("login")} />
      </form>
    </Fragment>
  );
};
export default TodoForm;
