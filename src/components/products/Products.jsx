import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Pagination, Box } from "@mui/material";
import { useGetProductsQuery } from "../../context/api/productApi";

const perPageCount = 6;

const Products = () => {
  const [page, setPage] = useState(sessionStorage.getItem("page-count") || 1);
  const { data } = useGetProductsQuery({ limit: perPageCount, page });
  const handleChangePagenation = (_, value) => {
    setPage(value);
    sessionStorage.setItem("page-count", value);
  };

  console.log(data);
  const card = data?.data?.products?.map((product) => (
    <Card sx={{ width: 280 }}>
      <CardActionArea className="card" key={product.id}>
        <CardMedia
          component="img"
          height="140"
          image={product.urls[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h3>$ {product.price}</h3>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));

  return (
    <section className="productss">
      <div className="container">
        <div className="cards">{card}</div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            page={page}
            onChange={handleChangePagenation}
            count={10}
            color="primary"
          />
        </Box>
      </div>
    </section>
  );
};

export default Products;
