export default () => ({
  port: parseInt(process.env.PORT, 10),
  name: process.env.APP_NAME,
  version: process.env.APP_VERSION,
  database: {
    uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority`,
  },
});
