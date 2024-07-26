const Pusher = require('pusher');

//--- Initialize ----
const pusher = new Pusher({
    app_id: "1840517",
    key:"6af84bb44d59ba0deff5",
    secret:"1edeb9cf5d9beda38dfe",
    cluster:"ap2",
    useTLS: true
});

module.exports = pusher;