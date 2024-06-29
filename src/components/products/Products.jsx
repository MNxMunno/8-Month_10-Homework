import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useGetProductsQuery } from "../../context/slice/Products";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Products = () => {
  const { data } = useGetProductsQuery({ limit: 8 });
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
        <div className="pagenation">
          <Stack className="page" spacing={2}>
            <Pagination count={10} color="primary" />
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default Products;
