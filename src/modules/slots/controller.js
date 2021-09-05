const catchAsync = require('../../utils/catchAsync')
const service = require('./service')

/**
 * Slot list
 */
 const list = catchAsync(async (req, res) => {
  let { date, hour } = req.query
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate()+1)
  const tomorrowDate = tomorrow.toISOString().split('T')[0]
  if (date < tomorrowDate) {
    res.send([])
  }
  if (!hour || hour < 8 || hour > 21 ) {
    hour = 0
  }
  const centres = await service.getCentres(date, hour)
  res.send(centres)
});


/**
 * Slot detail
 */
 const detail = catchAsync(async (req, res) => {
  const { centreId } = req.params;
  let { date, hour } = req.query
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate()+1)
  const tomorrowDate = tomorrow.toISOString().split('T')[0]
  if (date < tomorrowDate) {
    res.send([])
  }
  if (!hour || hour < 8 || hour > 21 ) {
    hour = 0
  }
  const centres = await service.getTimeSlot(centreId, date, hour)
  res.send(centres)
});

/**
 * Slot book
 */
 const book = catchAsync(async (req, res, next) => {
  const { nric, date, hour, centreId } = req.body;
  try {
    const centres = await service.bookTimeSlot(centreId, nric, date, hour)
    res.send(centres, 201)
  } catch (err) {
    res.send({error: err.message}, 400)
  }
});

module.exports = {
  list,
  detail,
  book,
};
