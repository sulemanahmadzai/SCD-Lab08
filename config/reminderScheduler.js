const cron = require("node-cron");
const { events } = require("../data");

cron.schedule("* * * * *", () => {
  // Runs every minute
  const now = new Date();
  events.forEach((event) => {
    if (event.reminderTime && new Date(event.reminderTime) <= now) {
      console.log(`Reminder: Event "${event.name}" is happening soon!`);
    }
  });
});

console.log("Reminder system started.");
