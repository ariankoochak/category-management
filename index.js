const fastify = require("fastify")();

const PORT = 3000;

require('./src/config/mongoose/mongoose.config');

fastify.register(require("./src/modules/router/routes"));

const startServer = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

startServer();
