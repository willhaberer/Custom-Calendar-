const { Schema, model } = require("mongoose");

const calendarSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    days: [String],
    months: [String],
    monthDayCount: [Number],
    currentYear: {
      type: Number,
      required: true,
      default: 0,
    },
    daysInYear: {
      type: Number,
      required: true,
      default: 1,
    },
    dayIndex: {
      type: Number,
      required: true,
      default: 0,
    },
    monthIndex: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  {
    toJSON: {
      virtuals: true,
    },
  }
);

// const Calendar = model("Calendar", calendarSchema);

module.exports = calendarSchema;
