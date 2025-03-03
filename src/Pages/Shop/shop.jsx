import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../Toolkit/bookSlice";
import {
  Container,
  Grid,
  Button,
  Drawer,
  Box,
  Typography,
  Pagination,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import BooksCard from "../../Components/BooksCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FilterSidebar from "../../Components/FilterSidebar";
import { useParams } from "react-router-dom";
import SearchBar from "../../Components/SearchBar";
import Loader from "../../Components/Loader";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import PageHeader from "../../Components/PageHeader";
function ShopPage() {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((state) => state.books);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [100, 1000],
    sortBy: "",
  });

  // ✅ Pagination State
  const [page, setPage] = useState(1);
  const booksPerPage = 8; // প্রতি পেজে কতগুলো বই দেখাবেন

  const { filterType, filterValue } = useParams();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    dispatch(getAllBooks({ filterType, filterValue }));
    setPage(1);
  }, [dispatch, filterType, filterValue]);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
    setDrawerOpen(false);
  };

  const filteredBooks = useMemo(() => {
    return books
      ?.filter(
        (book) =>
          book.price >= filters.priceRange[0] &&
          book.price <= filters.priceRange[1]
      )
      ?.sort((a, b) => {
        if (filters.sortBy === "price-asc") return a.price - b.price;
        if (filters.sortBy === "price-desc") return b.price - a.price;
        if (filters.sortBy === "rating-desc") return b.rating - a.rating;
        if (filters.sortBy === "title-asc")
          return a.title.localeCompare(b.title);
        if (filters.sortBy === "title-desc")
          return b.title.localeCompare(a.title);
        return 0;
      });
  }, [books, filters]);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const displayedBooks = filteredBooks.slice(
    (page - 1) * booksPerPage,
    page * booksPerPage
  );

  // ✅ Handle Page Change
  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <PageHeader title="Shop" />
      <Container maxWidth="xl">
        {/* Search Bar */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, my: 1 }}>
          <SearchBar />
          {/* Mobile Filter Button */}
          {isSmallScreen && (
            <Box
              sx={{
                // width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                mb: 2,
              }}
            >
              <Button
                variant="contained"
                // startIcon={<FilterListIcon />}
                onClick={toggleDrawer(true)}
              >
                <FilterListIcon />
              </Button>
            </Box>
          )}
        </Box>

        <Grid container spacing={2}>
          {/* Desktop Sidebar */}
          {!isSmallScreen && (
            <Grid item xs={3}>
              <FilterSidebar onApplyFilters={handleApplyFilters} />
            </Grid>
          )}

          {/* Books Display */}
          <Grid item xs={isSmallScreen ? 12 : 9}>
            {displayedBooks.length > 0 ? (
              <Grid container spacing={2}>
                {displayedBooks.map((book, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <BooksCard book={book} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "300px",
                  textAlign: "center",
                }}
              >
                <SearchOffIcon sx={{ fontSize: 60, color: "#d32f2f", mb: 2 }} />
                <Typography variant="h6" color="textSecondary" sx={{ mb: 1 }}>
                  No Books Found
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Try adjusting your filters or searching for something else.
                </Typography>
              </Box>
            )}

            {totalPages > 1 && (
              <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                />
              </Box>
            )}
          </Grid>
        </Grid>

        {/* Drawer for Mobile Sidebar */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250, p: 2 }}>
            <FilterSidebar onApplyFilters={handleApplyFilters} />
          </Box>
        </Drawer>
      </Container>
    </>
  );
}

export default ShopPage;
