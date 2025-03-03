import React, { useEffect, useState } from "react";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSearchDropdownBooks } from "../Toolkit/bookSlice";

const SearchBar = () => {
  const { filterType, filterValue } = useParams();
  const [query, setQuery] = useState(filterType === "search" ? filterValue.replaceAll("-", " ") : "");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const books = useSelector((state) => state.books.searchableBooks);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchDropdownBooks());
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks([]);
    }
  };

  const handleSelectBook = (book) => {
    setQuery(book.title);
    setFilteredBooks([]);
    navigate(`/book/${book.title.replaceAll(" ", "-")}`);
  };

  const handleSearchClick = () => {
    if (query.trim()) {
      navigate(`/shop/search/${query.trim().replaceAll(" ", "-")}`);
      setFilteredBooks([]);
    }else{
        navigate(`/shop`);
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", maxWidth: "100%", mb: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search books..."
        value={query}
        onChange={handleSearch}
        onKeyPress={(e) => e.key === "Enter" && handleSearchClick()} 
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearchClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {filteredBooks.length > 0 && (
        <Paper
          sx={{
            position: "absolute",
            width: "100%",
            zIndex: 10,
            mt: 1,
            maxHeight: 200,
            overflowY: "auto",
          }}
        >
          <List>
            {filteredBooks.map((book) => (
              <ListItem
                button
                key={book.id}
                onClick={() => handleSelectBook(book)}
              >
                <ListItemText primary={book.title} secondary={book.author} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default SearchBar;
