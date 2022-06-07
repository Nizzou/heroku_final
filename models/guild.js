const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    id: String,
    prefix: { 'type': String, 'default': '!'},
    logChannel: { 'type': String, 'default': '975896532521996359' }
});

module.exports = mongoose.model('Guild', guildSchema);