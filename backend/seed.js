const mongoose = require('mongoose');
const Job = require('./models/Job');
const connectDB = require('./config/db');

require('dotenv').config(); 

const seedJobs = [
  {
    title: 'Frontend Developer',
    company: 'Altibbe Tech',
    location: 'Bhilai',
    description: 'Build modern UI using React.',
    type: 'Full-Time',
  },
  {
    title: 'Backend Developer',
    company: 'Hedamo Inc.',
    location: 'Bangalore',
    description: 'Design scalable backend APIs.',
    type: 'Part-Time',
  },
  {
    title: 'DevOps Engineer',
    company: 'CareerBoost',
    location: 'Delhi',
    description: 'Maintain CI/CD pipelines.',
    type: 'Remote',
  },
];

async function seed() {
  try {
    await connectDB();
    console.log('Database connected for seeding.');
    await Job.deleteMany({});
    console.log('Existing jobs deleted.');
    await Job.insertMany(seedJobs);
    console.log('Seed data inserted successfully.');

  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    mongoose.disconnect();
    console.log('Database disconnected.');
  }
}

seed();
