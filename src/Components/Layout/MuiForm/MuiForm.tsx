import { AccountBox } from "@mui/icons-material";
import PasswordIcon from "@mui/icons-material/Password";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import "./MuiForm.css";

function MuiForm(): JSX.Element {
  return (
    <div className="MuiForm">
      <form>
        <Typography variant="h4" className="HeadLine">
          Login
        </Typography>
        <AccountBox style={{ margin: 10, fontSize: 40 }} />
        <TextField label="user Name" variant="outlined" />
        <br />
        <br />
        <PasswordIcon style={{ fontSize: 40, margin: 10 }} />
        <TextField label="password" variant="outlined" type="password" />
        <br />
        <br />
        <ButtonGroup variant="contained" fullWidth>
          <Button color="primary">Login</Button>
          <Button color="secondary">Register</Button>
        </ButtonGroup>
      </form>
    </div>
  );
}

export default MuiForm;
