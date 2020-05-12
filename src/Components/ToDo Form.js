import { react, Fragment } from "React";
import TextField from "@material-ui/core/TextField";

const TodoForm = () => {
  return (
    <Fragment>
      <form>
        <TextField
          variant="outlined"
          placeholder="add todo"
          margin="normal"
        ></TextField>
      </form>
    </Fragment>
  );
};
export default TodoForm.js;
