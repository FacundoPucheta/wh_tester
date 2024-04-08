const url = require("url");

const getNextPage = (link) => {

  const midPage = link.includes(",");

  if (midPage) {
    link = link.split(",")[1].trim();
  }

  const parsedUrl = url.parse(link, true);

  const pageInfo = parsedUrl.query.page_info.slice(0,parsedUrl.query.page_info.length - 13);

  return pageInfo;
};

// const link = "<https://benizia.myshopify.com/admin/api/2023-10/customers.json?limit=250&page_info=eyJkaXJlY3Rpb24iOiJwcmV2IiwibGFzdF9pZCI6Njk4MDYyNzEzNjcyNCwibGFzdF92YWx1ZSI6MTcwMTk3MzM5MTAwMH0>; rel=\"previous\", <https://benizia.myshopify.com/admin/api/2023-10/customers.json?limit=250&page_info=eyJkaXJlY3Rpb24iOiJuZXh0IiwibGFzdF9pZCI6Njk3NTg5MTcwMTk3MiwibGFzdF92YWx1ZSI6MTcwMTczNTc0NjAwMH0>; rel=\"next\"";
// const link = '<https://benizia.myshopify.com/admin/api/2023-10/customers.json?limit=250&page_info=eyJsYXN0X2lkIjo2OTgwNjM0NTc1MDYwLCJsYXN0X3ZhbHVlIjoxNzAxOTczODA3MDAwLCJkaXJlY3Rpb24iOiJuZXh0In0>; rel="next"';

// const prueba = getNextPage(link);
// console.log(prueba);

module.exports = getNextPage;


