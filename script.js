const express = require('express')
const app = express();

app.listen("3000", () => {
  console.log(`Server is running on port 3000`);
});

const cors = require('cors');
app.use(cors());
app.use(express.json());


app.all('/api/message/:id/:message', async (req, res) => {
  try {
    const { id, message } = req.params;
    if (id && message) {
      fetch(`beta-3ndi0q2whds-981qnd-qw-edmqo-odqa-1.2js93ms943cnr9xnw9dh8q9.repl.co/api/message/${id}/${message}`)
      res.status(200).json({ success: "Message sent successfully." });
    } else {
      res.status(400).json({ error: "No message/id provided" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal server error." });
  }
});
