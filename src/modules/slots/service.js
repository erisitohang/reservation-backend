const repository = require("./repository");
const centreRepository = require("../centres/repository");
const reservationRepository = require("../reservations/repository");

const getCentres = async (date, hour) => {
  const centres = await centreRepository.getCentres()
  for(let centre of centres) {
    try {
      const slots =  await repository.getSlotsByDate(centre.id, date, hour)
      if (slots && slots?.total) {
        centre.slots = slots.total
      } else {
        centre.slots = 0
      }

      const reservations =  await reservationRepository.getReservedByDate(centre.id, date, hour)
      if (reservations && reservations?.reserved) {
        centre.reserved = reservations.reserved
      } else {
        centre.reserved = 0
      }
      
    } catch (error) {
      console.log('error'+ error);
    }
  }
  return centres
};

const getTimeSlot = async (centreId, date, hour) => {
  const slots = await repository.getTimeSlot(centreId, date)
  const reservations = await reservationRepository.getReserved(centreId, date)
  const reserved = {}
  if (reservations.length) {
    reservations.forEach(r => {
      reserved[r.hour] = r.reserved
    });
  }
 
  slots.forEach(slot => {
    slot.reserved = 0
    if ( slot.hour in reserved) {
      slot.reserved = reserved[slot.hour]
    }
  });
  return slots
};

const bookTimeSlot = async (centreId, nric, date, hour) => {
  const nricReserved  = await reservationRepository.getByNric(nric)
  if (nricReserved) {
    throw new Error('Already registerd')
  }

  const slots = await repository.getTimeSlot(centreId, date, hour)
  const reservations = await reservationRepository.getReserved(centreId, date, hour)
  if (!slots?.length) {
    throw new Error('No free slot')
  }

  if (reservations && reservations.length) {
    const [ reservation ] = reservations
    const [ slot ] = slots
    if (reservation?.hour >= slot.hour) {
      throw new Error('No free slot')
    }
  }

  return await reservationRepository.insert(centreId, nric, date, hour)
};

module.exports = {
    getCentres,
    getTimeSlot,
    bookTimeSlot
};
