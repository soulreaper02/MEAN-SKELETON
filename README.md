[![Build Status](https://travis-ci.org/soulreaper02/MEAN-SKELETON.svg?branch=master)](https://travis-ci.org/soulreaper02/MEAN-SKELETON)

# Introduction
A minimal `MEAN` stack skeleton with all required configurations.

# Configuration

1. Please ensure that [`mongoDB`][MONGODB] and [`Node`][NODE] is installed and running on your local.

2. Run the following command in your local project directory to build all required node modules.
   ```bash
   npm install
   ```

3. You can modify the port number and database name in the following line in [`app.js`](app.js):
   ```
   mongoose.connect('localhost:27017/node-angular');
   ```
   
   to
   
   ```
   mongoose.connect('localhost:<port>/<your-database-name>');
   ```
  
4. Start `webpack` using the following command:
   ```bash
   npm run build
   ```

5. Start your node server using following command:
   ```bash
   npm start
   ```

6. Goto [localhost][LOCAL] and your instance will be running

[MONGODB]: https://docs.mongodb.com/manual/installation
[NODE]: https://nodejs.org/en/
[LOCAL]: 127.0.0.1:3000/
