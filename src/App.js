import React, { useEffect, useState } from "react";
import { Header, Body, Footer } from "./components/index";
import { Outlet } from "react-router-dom";
// import { useContext } from 'react';
// import { UserContextStore } from './utils/UserContextStore';
import { reduxStore } from "./utils/reduxStore";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  // const [authUserName, setAuthUserName] = useState("");

  // //dummy fetch Api
  // useEffect(()=>{
  //   const data = {
  //     name:"Aman Kumar",
  //   }
  //   setAuthUserName(data.name);
  // }, [])

  return (
    <>
      {/* <UserContextStore.Provider value={{logginName: authUserName, setAuthUserName, hobbies:"Coding2"}}> */}
      <HelmetProvider>
        <Provider store={reduxStore}>
          <div className="app relative">
            <Helmet>
              {/* Static SEO meta tags for a food-restaurant website */}
              <title>
                Food Restaurant - Discover Delicious Meals & Recipes
              </title>
              <meta
                name="description"
                content="Explore the best food and restaurant options in your area. From pizzas to burgers, we offer a wide range of delicious meals for every taste!"
              />
              <meta
                name="keywords"
                content="food, restaurant, meals, dining, pizza, burgers, restaurant delivery, best restaurants, food delivery, recipes"
              />
              <meta
                property="og:title"
                content="Food Restaurant - Discover Delicious Meals & Recipes"
              />
              <meta
                property="og:description"
                content="Explore the best food and restaurant options in your area. From pizzas to burgers, we offer a wide range of delicious meals for every taste!"
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://food-restaurant-iota.vercel.app"
              />
              <meta
                property="og:image"
                content="https://food-restaurant-iota.vercel.app"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Food Restaurant - Discover Delicious Meals & Recipes"
              />
              <meta
                name="twitter:description"
                content="Explore the best food and restaurant options in your area. From pizzas to burgers, we offer a wide range of delicious meals for every taste!"
              />
              <meta
                name="twitter:image"
                content="https://food-restaurant-iota.vercel.app"
              />
            </Helmet>

            <Header />
            {/* <Body/> */}
            <Outlet />
            <Toaster />
            <Footer />
          </div>
        </Provider>
      </HelmetProvider>
      {/* </UserContextStore.Provider> */}
    </>
  );
}

export default App;
