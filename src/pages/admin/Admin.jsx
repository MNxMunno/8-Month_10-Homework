import React from "react";
import { useGetUsersQuery } from "../../context/api/userApi";
import { useGetProductsQuery } from "../../context/api/productApi";

const Admin = () => {
  const { data } = useGetProductsQuery();
  console.log(data?.data?.products);
  const card = data?.data?.products?.map((el) => {
    <div className="cardd" key={el.id}>
      <h1>{el.title}</h1>
      <h2>{el.price}</h2>
      {/* <img src={el.image} alt={el.name} /> */}
    </div>;
  });
  return (
    <section className="admin">
      <div className="container">
        <div className="card">{card}</div>
      </div>
    </section>
  );
};

export default Admin;
