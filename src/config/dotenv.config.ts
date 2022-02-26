import * as dotenv from 'dotenv';
import * as path from 'path';

export default function dot_env() {
  return dotenv.config({
    path: path.resolve(
      process.env.NODE_ENV === 'production'
        ? 'env.prod'
        : process.env.NODE_ENV === 'stage'
        ? '.env.stage'
        : '.env.dev',
    ),
  });
}
