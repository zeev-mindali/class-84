import { BookModel } from "../BookModel";
import "./BookForm.css";
import { useForm } from "react-hook-form";
import {
  MenuBook,
  LocalLibrary,
  PriceChange,
  Description,
  ProductionQuantityLimits,
  Style,
} from "@mui/icons-material";
import {
  TextField,
  Typography,
  ButtonGroup,
  Button,
  TextareaAutosize,
  Select,
  MenuItem,
} from "@mui/material";

function BookForm(): JSX.Element {
  //npm install react-hook-form -> for forms in react
  //mui.com -> npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookModel>();

  const send = (newBook: BookModel) => {
    console.log(newBook);
  };
  return (
    <div className="BookForm">
      <form onSubmit={handleSubmit(send)}>
        <Typography
          variant="h4"
          className="HeadLine alignComponents"
          style={{ textAlign: "center" }}
        >
          New Book
        </Typography>
        <MenuBook style={{ fontSize: 30, margin: 10 }} />
        <TextField
          label="book Name"
          variant="outlined"
          className="alignComponents"
          {...register("bookName", { required: true })}
        />

        <br />
        <br />
        <LocalLibrary style={{ fontSize: 30, margin: 10 }} />
        <TextField
          label="Author Name"
          variant="outlined"
          className="alignComponents"
          {...register("authorName", { required: true })}
        />

        <br />
        <br />
        <PriceChange style={{ fontSize: 30, margin: 10 }} />
        <TextField
          label="book price"
          variant="outlined"
          className="alignComponents"
          type="number"
          {...register("bookPrice", { required: true, min: 1, max: 100 })}
        />

        <br />
        <br />
        <Description style={{ fontSize: 30, margin: 10 }} />
        <TextareaAutosize
          aria-label="summary"
          className="alignComponents"
          minRows={5}
          style={{ width: 225 }}
          {...register("summary", { required: true })}
        />

        <br />
        <br />
        <ProductionQuantityLimits style={{ fontSize: 30, margin: 10 }} />
        <TextField
          label="Quantity"
          variant="outlined"
          className="alignComponents"
          type="number"
          {...register("qty", { required: true, min: 1, max: 50 })}
        />
        <Style style={{ fontSize: 30, margin: 10 }} />
        <Select
          label="Genre"
          style={{ width: 225 }}
          {...register("genre", { required: true })}
        >
          <MenuItem value={1}>ספרות יפה</MenuItem>
          <MenuItem value={2}>ילדים</MenuItem>
          <MenuItem value={3}>פנטזיה</MenuItem>
          <MenuItem value={4}>מדע בדיוני</MenuItem>
        </Select>
        <br />
        <br />
        <ButtonGroup variant="contained" fullWidth>
          <Button color="primary" type="submit">
            Add Book
          </Button>
          <Button color="secondary" type="reset">
            Kill Leon
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}

export default BookForm;
/*
שם הספר
שם הסופר
מחיר הספר
תקציר
כמות במלאי
ז'אנר (ספרות יפה, מתח, פנטזיה, מדע בדיוני)
SELECT
*/
