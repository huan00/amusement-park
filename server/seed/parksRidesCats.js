const db = require('../db')
const { Park, Ride, Category } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const ride1 = await new Ride({
    name: 'Widow Maker',
    description: 'We hope you have life insurance...',
    maxCapacity: 2,
    yearBuilt: 1988,
    rideLength: 5,
    park: 'Seven Flags',
    img: 'https://i.imgur.com/Nq9oKM6.jpg'
  })
  ride1.save()

  const ride2 = await new Ride({
    name: 'Tea Party',
    description: 'A lovely, gentle tea time.',
    maxCapacity: 8,
    yearBuilt: 1995,
    rideLength: 15,
    park: 'Tree Gardens',
    img: 'https://i.imgur.com/PexR47V.jpg'
  })
  ride2.save()

  const ride3 = await new Ride({
    name: 'Wave Cave',
    description: 'Watery fun in a dark cave!',
    maxCapacity: 100,
    yearBuilt: 1972,
    rideLength: 15,
    park: 'Galaxy Studios',
    img: 'https://i.imgur.com/81FSn3K.jpg'
  })
  ride3.save()

  const ride4 = await new Ride({
    name: 'Cocunut Waters',
    description: 'Relax in the lazy waters!',
    maxCapacity: 25,
    yearBuilt: 1990,
    rideLength: 30,
    park: 'Coconut Farm',
    img: 'https://i.imgur.com/TfqSbBm.jpg'
  })
  ride4.save()

  const ride5 = await new Ride({
    name: 'Moosey-go-Round',
    description:
      'A local take on the classic Merry go Round! Our riders enjoy a spin on mooses, instead of traditional horses.',
    maxCapacity: 110,
    yearBuilt: 1978,
    rideLength: 300,
    park: 'Moose and Friends',
    img: 'https://i.imgur.com/AHnqtPq.jpg'
  })
  ride5.save()

  const ride6 = await new Ride({
    name: 'Twist and Scream',
    description:
      'The fastest coaster in the midwest! High velocity twists and turns that will leave your jaw dropped and lungs empty!',
    maxCapacity: 60,
    yearBuilt: 2013,
    rideLength: 220,
    park: 'Oak Point',
    img: 'https://i.imgur.com/e97gp9q.jpg'
  })
  ride6.save()

  const ride7 = await new Ride({
    name: 'Supernova Splash',
    description: '200 foot drop into a shallow wave pool!',
    maxCapacity: 1,
    yearBuilt: 2008,
    rideLength: 3,
    park: 'Galaxy Studios',
    img: 'https://i.imgur.com/TfqSbBm.jpg'
  })
  ride7.save()

  const park1 = await new Park({
    name: 'Seven Flags',
    description: 'Thrill rides in the mile high city!',
    location: 'Denver, CO',
    rides: ride1._id,
    yearOpened: 1984,
    category: 'Amusement',
    img: 'https://i.imgur.com/qC68JNi.jpg'
  })
  park1.save()

  const park2 = await new Park({
    name: 'Tree Gardens',
    description: 'Texas fun in the sun!',
    location: 'Houston, TX',
    rides: ride2._id,
    yearOpened: 1992,
    category: 'Kids',
    img: 'https://i.imgur.com/QMDsn4b.jpg'
  })
  park2.save()

  const park3 = await new Park({
    name: 'Galaxy Studios',
    description: 'Out of this world fun!',
    location: 'Orlando, FL',
    rides: [ride3._id, ride7._id],
    yearOpened: 1965,
    category: 'Water',
    img: 'https://i.imgur.com/S9KJysN.jpg'
  })
  park3.save()

  const park4 = await new Park({
    name: 'Coconut Farm',
    description: "It's LA, it's nice, and it's safe!",
    location: 'Los Angeles, CA',
    rides: ride4._id,
    yearOpened: 1987,
    category: 'Water',
    img: 'https://i.imgur.com/An4Smlw.jpg'
  })
  park4.save()

  const park5 = await new Park({
    name: 'Moose and Friends',
    description: 'All the exhilaration and company of Moose and friends!',
    location: 'San Diego, CA',
    rides: ride5._id,
    yearOpened: 1976,
    category: 'Kids',
    img: 'https://i.imgur.com/8xEv41E.jpg'
  })
  park5.save()

  const park6 = await new Park({
    name: 'Oak Point',
    description: 'The best coasters in all the land!',
    location: 'Gary, IN',
    rides: ride6._id,
    yearOpened: 1999,
    category: 'Amusement',
    img: 'https://i.imgur.com/IqT8yUe.jpg'
  })
  park6.save()

  const categories = [
    {
      name: 'Amusement',
      parks: [park1._id, park6._id],
      img: 'https://i.imgur.com/ls7D4pN.jpg'
    },
    {
      name: 'Water',
      parks: [park3._id, park4._id],
      img: 'https://i.imgur.com/3r26RaV.jpg'
    },
    {
      name: 'Kids',
      parks: [park2._id, park3._id],
      img: 'https://i.imgur.com/Z28npxB.jpg'
    }
  ]

  await Category.insertMany(categories)
  console.log('Created Rides, Parks, and Categories/Themes!')
}

const run = async () => {
  await main()
  db.close()
}

run()
