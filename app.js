const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('CI/CD Node.js App Working! good.'));
=======
app.get('/', (req, res) => res.send('CI/CD Node.js App Working! Test page'));
>>>>>>> d19e87b (updated)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

