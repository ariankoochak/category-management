module.exports = function (fastify, opts, done) {
    fastify.get("/", (req,res)=>{
        res.send('salam')
    });
    done();
};
