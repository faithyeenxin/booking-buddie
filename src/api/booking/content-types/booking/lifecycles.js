// // In your booking model's settings file (api/booking/models/booking.settings.json)
// module.exports = {
//   beforeCreate: async (model, attrs, options) => {
//     // Get the chosen technician's available slots
//     const technician = await strapi
//       .query("technician")
//       .findOne({ id: attrs.technician.id });
//     const availableSlots = technician.availableSlots.map((slot) => slot.id);

//     // Check if the selected slot is available for the technician
//     if (!availableSlots.includes(attrs.slot.id)) {
//       throw new Error(
//         "Selected slot is not available for the chosen technician"
//       );
//     }
//   },
// };
