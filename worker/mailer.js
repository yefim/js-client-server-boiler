const Queue = require('bee-queue');

const mailer = {
  init() {
    const queue = new Queue('email');
    queue.process((job, done) => {
      const {template, to} = job.data;

      template && this[template] && this[template](to, done);
    });
  },

  welcome(to, done) {
    console.log(`Sending welcome email to ${to}...`);
    done();
  },

  passwordReset(to, done) {
    console.log(`Sending password successfully reset email to ${to}...`);
    done();
  }
};

module.exports = mailer;
