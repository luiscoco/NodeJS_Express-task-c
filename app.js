const express = require('express');
const app = express();
const usersRoutes = require('./usersRoutes'); // Assuming the file is in the same directory

// Your other middleware and configurations, if any

// Mount the users routes from the separate module
app.use('/users', usersRoutes);

// Your other routes and middleware, if any

// Start the server
const port = 3003; // Or any other port you prefer
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
