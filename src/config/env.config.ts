import dotenv from 'dotenv';
import dotenv_expand from 'dotenv-expand';

const env = dotenv.config();
dotenv_expand(env);

export const STRING = process.env.STRING || '';
export const NUMBER = process.env.NUMBER || 0;