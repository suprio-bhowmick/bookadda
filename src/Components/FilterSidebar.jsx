import React, { memo, useState } from "react";
import {
  Box,
  Typography,
  Slider,
  Button,
  Select,
  MenuItem,
  CardContent,
  Card,
  Divider,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

function FilterSidebar({ onApplyFilters }) {
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const [sortBy, setSortBy] = useState("");
  const { filterType, filterValue } = useParams();
  console.log("Sidebar Rendering");

  const categories = [
    "Literature & Fiction",
    "Memoir",
    "Classic",
    "Mystery",
    "Fantasy",
    "Self Help",
    "History",
    "Finance",
  ];

  const author = [
    "Paulo Coelho",
    "James Clear",
    "Brené Brown",
    "Amish Tripathi",
    "Robert Kiyosaki",
    "Haruki Murakami",
    "Arundhati Roy",
    "Eknath Easwaran",
    "Simon Sinek",
    "Mark Manson",
  ];

  const handleApplyFilters = () => {
    onApplyFilters({
      priceRange: priceRange || [100, 1000],
      sortBy: sortBy || "",
    });
  };

  const handleResetFilters = () => {
    setPriceRange([100, 1000]);
    setSortBy("");
    onApplyFilters({ priceRange: [100, 1000], sortBy: "" });
  };

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h6">Filter Books</Typography>

          {/* Price Range Slider */}
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Price Range
          </Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue || [100, 1000])}
            valueLabelDisplay="auto"
            min={100}
            max={5000}
            step={100}
          />

          {/* Sort By */}
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Sort By
          </Typography>
          <Select
            fullWidth
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value || "")}
            displayEmpty
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="price-asc">Price: Low to High</MenuItem>
            <MenuItem value="price-desc">Price: High to Low</MenuItem>
            <MenuItem value="rating-desc">Rating: High to Low</MenuItem>
            <MenuItem value="title-asc">Title: A-Z</MenuItem>
            <MenuItem value="title-desc">Title: Z-A</MenuItem>
          </Select>

          {/* Apply & Reset Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button variant="contained" onClick={handleApplyFilters}>
              Apply
            </Button>
            <Button variant="outlined" onClick={handleResetFilters}>
              Reset
            </Button>
          </Box>
          <Divider sx={{ mt: 2 }} />
          {/* Category Selection */}
          <Box>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Top Category
            </Typography>
            {categories.map((category, index) => {
              const isSelected =
                filterType === "category" &&
                filterValue.replaceAll("-", " ") === category;
              return (
                <Box
                  key={index}
                  sx={{
                    display: "inline-block",
                    margin: "3px",
                    cursor: "pointer",
                  }}
                >
                  <Link to={`/shop/category/${category.replaceAll(" ", "-")}`}>
                    <Typography
                      sx={{
                        padding: "4px 10px",
                        border: "1px solid #f65d4e",
                        fontSize: "16px",
                        borderRadius: "4px",
                        textAlign: "center",
                        transition: "0.3s",
                        display: "inline-block",
                        backgroundColor: isSelected ? "#f65d4e" : "transparent", // Highlight when selected
                        color: isSelected ? "#fff" : "#f65d4e",
                        "&:hover": {
                          backgroundColor: "#e72b1a",
                          color: "#fff",
                        },
                      }}
                    >
                      {category}
                    </Typography>
                  </Link>
                </Box>
              );
            })}
          </Box>
          <Divider sx={{ mt: 2 }} />
          {/* Author Selection */}
          <Box>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Top Author
            </Typography>
            {author.map((author, index) => {
              const isSelected =
                filterType === "author" &&
                filterValue.replaceAll("-", " ") === author;
              return (
                <Box
                  key={index}
                  sx={{
                    display: "inline-block",
                    margin: "3px",
                    cursor: "pointer",
                  }}
                >
                  <Link to={`/shop/author/${author.replaceAll(" ", "-")}`}>
                    <Typography
                      sx={{
                        padding: "4px 10px",
                        border: "1px solid #f65d4e",
                        fontSize: "16px",
                        borderRadius: "4px",
                        textAlign: "center",
                        transition: "0.3s",
                        display: "inline-block",
                        backgroundColor: isSelected ? "#f65d4e" : "transparent", // Highlight when selected
                        color: isSelected ? "#fff" : "#f65d4e",
                        "&:hover": {
                          backgroundColor: "#e72b1a",
                          color: "#fff",
                        },
                      }}
                    >
                      {author}
                    </Typography>
                  </Link>
                </Box>
              );
            })}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default memo(FilterSidebar);

