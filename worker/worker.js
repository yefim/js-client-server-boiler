const Queue = require('bee-queue');

const queue = new Queue('email');

queue.process((job, done) => {
  console.log(job.data);
  return done();
});
