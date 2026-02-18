const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const Event = require("./models/Event");

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");

    // Clear existing data
    await User.deleteMany({});
    await Event.deleteMany({});
    console.log("Cleared existing data");

    // Create Admin User
    const admin = await User.create({
      name: "Admin User",
      email: "admin@college.com",
      password: "admin123",
      role: "admin",
    });
    console.log("Admin created");

    // Create Sample Students
    const student1 = await User.create({
      name: "John Doe",
      email: "student@college.com",
      password: "student123",
      role: "student",
    });

    const student2 = await User.create({
      name: "Jane Smith",
      email: "jane@college.com",
      password: "student123",
      role: "student",
    });
    console.log("Students created");

    // Create Sample Events
    const events = [
      {
        title: "Tech Fest 2026",
        description:
          "Annual technical festival featuring coding competitions, hackathons, and tech talks from industry experts.",
        date: new Date("2026-03-15"),
        time: "09:00 AM",
        venue: "Main Auditorium",
        category: "Technical",
        createdBy: admin._id,
      },
      {
        title: "Cultural Night",
        description:
          "A vibrant evening of music, dance, and drama performances by talented students.",
        date: new Date("2026-03-20"),
        time: "06:00 PM",
        venue: "Open Air Theatre",
        category: "Cultural",
        createdBy: admin._id,
      },
      {
        title: "Sports Day",
        description:
          "Inter-department sports competition including cricket, football, basketball, and athletics.",
        date: new Date("2026-03-25"),
        time: "08:00 AM",
        venue: "Sports Complex",
        category: "Sports",
        createdBy: admin._id,
      },
      {
        title: "Web Development Workshop",
        description:
          "Hands-on workshop on modern web development using React, Node.js, and MongoDB.",
        date: new Date("2026-04-01"),
        time: "10:00 AM",
        venue: "Computer Lab 1",
        category: "Workshop",
        createdBy: admin._id,
      },
      {
        title: "Career Guidance Seminar",
        description:
          "Expert guidance on career opportunities, interview preparation, and industry trends.",
        date: new Date("2026-04-05"),
        time: "02:00 PM",
        venue: "Seminar Hall",
        category: "Seminar",
        createdBy: admin._id,
      },
    ];

    await Event.insertMany(events);
    console.log("Events created");

    console.log("\n=== Seed Data Created Successfully ===");
    console.log("\nLogin Credentials:");
    console.log("Admin: admin@college.com / admin123");
    console.log("Student: student@college.com / student123");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
