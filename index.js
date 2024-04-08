require("dotenv").config();
const { server } = require("./src/server");
const { PORT } = process.env;

const DEFAULT_PORT = PORT || 3001;

server.listen(DEFAULT_PORT, () => {
  console.log(`Server is listening on PORT: ${DEFAULT_PORT}`);
});
