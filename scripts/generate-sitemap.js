import fetch from "node-fetch"; // Importing node-fetch as ES module
import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

// Fetch dynamic restaurant IDs
// const fetchDynamicRestaurantIds = async () => {
//   try {
//     const response = await fetch(
//       "https://food-explorer-server-prime.vercel.app/api/food-explorer/restaurants",
//       { headers: { apikey: "12233344445678" } }
//     ); // Replace with your actual endpoint
//     const restaurants = await response.json();
//     return restaurants.map((restaurant) => restaurant.id); // Assuming each restaurant has an `id` field
//   } catch (error) {
//     console.error("Error fetching restaurant IDs:", error);
//     return [];
//   }
// };

// Generate sitemap
const generateSitemap = async () => {
  // Static routes
  const staticRoutes = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.5 },
    { url: "/contact", changefreq: "monthly", priority: 0.5 },
    { url: "/grocery", changefreq: "weekly", priority: 0.7 },
    { url: "/cart", changefreq: "weekly", priority: 0.6 },
  ];

  // Fetch dynamic routes
  //   const restaurantIds = await fetchDynamicRestaurantIds();
  // const searchTerms = await fetchDynamicSearchTerms();

  //   const dynamicRestaurantRoutes = restaurantIds.map((id) => ({
  //     url: `/restaurants/${id}`,
  //     changefreq: "daily",
  //     priority: 0.9,
  //   }));

  // Combine all routes
  const allRoutes = [...staticRoutes];

  // Create sitemap
  const sitemap = new SitemapStream({
    hostname: "https://food-restaurant-iota.vercel.app/",
  });

  allRoutes.forEach((route) => sitemap.write(route));
  sitemap.end();

  // Write to sitemap.xml
  const sitemapXML = await streamToPromise(sitemap).then((data) =>
    data.toString()
  );
  fs.writeFileSync("./public/sitemap.xml", sitemapXML);
  console.log("Sitemap generated at public/sitemap.xml");
};

// Run the script
generateSitemap();
