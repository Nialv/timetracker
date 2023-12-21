import app from './app';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const localUrl = `http://localhost:${PORT}`;
  console.info('\nExpress App Running:')
  console.info(`\n➜ Local: ${localUrl}\n`);
});
