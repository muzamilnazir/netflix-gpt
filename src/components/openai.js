import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY,// This is the default and can be omitted
   dangerouslyAllowBrowser: true 
});
