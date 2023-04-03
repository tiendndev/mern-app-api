require("dotenv").config();

/* c94bMWue84YLGryH */
/* set up env, and env will be located just only in my computer, not push
   to the github
*/

export const env = {
   MONGODB_URI: process.env.MONGODB_URI,
   PORT: process.env.HOST,
   PORT: process.env.PORT,
};
