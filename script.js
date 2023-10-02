const express = require('express')
const app = express();

app.listen("3000", () => {
  console.log(`Server is running on port ${PORT}`);
});

const cors = require('cors');
app.use(cors());
app.use(express.json());

const Discord = require('discord.js')
const { SlashCommandBuilder, EmbedBuilder, ChannelType, IntentsBitsField, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField, MessageAttachment, Client, Collection, Events, GatewayIntentBits, time, guilds, AuditLogEvent } = require('discord.js');
let client = new Discord.Client({ intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers", "GuildMessageReactions", "DirectMessages", "GuildPresences", "GuildBans"], partials: [Discord.Partials.Message, Discord.Partials.Channel, Discord.Partials.Reaction, Discord.Partials.Channel, Discord.Partials.GuildMember] })
client.login("MTE0ODIxNTc2Njk5NTQ1NjA1MA.GOeSdB.UWS9ZdG3aefMi-krzD9E6rP4yrA6EMnd5aMHjM")

app.all('/api/message/:id/:message', async (req, res) => {
  try {
    const { id, message } = req.params;
    if (id && message) {
      client.channels.cache.get("1147802384580481054").send(`Message Received: \`${message}\` - message from ${id}`);
      res.status(200).json({ success: "Message sent successfully." });
    } else {
      res.status(400).json({ error: "No message/id provided" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal server error." });
  }
});
