const db = require("./db");
const faker = require("faker");
const Client = require("./Client");
const { Trip } = require("./index");
const City = require("./City");

const seed = async () => {
  const clients = await Promise.all([
    Client.create({
      name: faker.helpers.userCard().name,
      email: faker.helpers.userCard().email,
      avatarUrl:
        "https://doodleipsum.com/700/avatar-4?i=c2b0532042a5b137a42346a10e5222ec",
    }),
    Client.create({
      name: faker.helpers.userCard().name,
      email: faker.helpers.userCard().email,
      avatarUrl:
        "https://doodleipsum.com/700/avatar-4?i=6f37a9347132935ca372b20d1d0b720b",
    }),
    Client.create({
      name: faker.helpers.userCard().name,
      email: faker.helpers.userCard().email,
      avatarUrl:
        "https://doodleipsum.com/700/avatar-4?i=3c872b28d4577889c194cbc98b672696",
    }),
    Client.create({
      name: faker.helpers.userCard().name,
      email: faker.helpers.userCard().email,
      avatarUrl:
        "https://doodleipsum.com/700/avatar-4?i=2c0a40183a5fc9f604e32f78e45895b1",
    }),
    Client.create({
      name: faker.helpers.userCard().name,
      email: faker.helpers.userCard().email,
      avatarUrl:
        "https://doodleipsum.com/700/avatar-4?i=be176fd7d38de78c85dbfba873eb723a",
    }),
  ]);

  const [p1, p2, p3, p4, p5] = clients;

  const cities = await Promise.all([
    City.create({
      name: "Dubai",
    }),
    City.create({
      name: "London",
    }),
    City.create({
      name: "Madrid",
    }),
    City.create({
      name: "New York City",
    }),
    City.create({
      name: "Osaka",
    }),
    City.create({
      name: "Seoul",
    }),
    City.create({
      name: "Amsterdam",
    }),
    City.create({
      name: "Istanbul",
    }),
    City.create({
      name: "Taipei",
    }),
    City.create({
      name: "Rome",
    }),
    City.create({
      name: "Berlin",
    }),
    City.create({
      name: "Hong Kong",
    }),
    City.create({
      name: "Paris",
    }),
    City.create({
      name: "Toronto",
    }),
    City.create({
      name: "Warsaw",
    }),
  ]);

  const [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15] =
    cities;

  p1.setBase(c1);
  p2.setBase(c5);
  p3.setBase(c6);
  p4.setBase(c15);
  p5.setBase(c11);

  const trips = await Promise.all([
    Trip.create({
      clientId: p1.id,
      cityId: c2.id,
    }),
    Trip.create({
      clientId: p1.id,
      cityId: c3.id,
    }),
    Trip.create({
      clientId: p1.id,
      cityId: c4.id,
    }),
    Trip.create({
      clientId: p1.id,
      cityId: c8.id,
    }),
    Trip.create({
      clientId: p1.id,
      cityId: c8.id,
    }),
    Trip.create({
      clientId: p1.id,
      cityId: c10.id,
    }),
    Trip.create({
      clientId: p2.id,
      cityId: c2.id,
    }),
    Trip.create({
      clientId: p2.id,
      cityId: c6.id,
    }),
    Trip.create({
      clientId: p2.id,
      cityId: c12.id,
    }),
    Trip.create({
      clientId: p3.id,
      cityId: c1.id,
    }),
    Trip.create({
      clientId: p3.id,
      cityId: c14.id,
    }),
    Trip.create({
      clientId: p3.id,
      cityId: c7.id,
    }),
    Trip.create({
      clientId: p3.id,
      cityId: c8.id,
    }),
    Trip.create({
      clientId: p3.id,
      cityId: c9.id,
    }),
    Trip.create({
      clientId: p3.id,
      cityId: c10.id,
    }),
    Trip.create({
      clientId: p3.id,
      cityId: c12.id,
    }),
    Trip.create({
      clientId: p3.id,
      cityId: c12.id,
    }),
    Trip.create({
      clientId: p4.id,
      cityId: c2.id,
    }),
    Trip.create({
      clientId: p4.id,
      cityId: c5.id,
    }),
    Trip.create({
      clientId: p4.id,
      cityId: c7.id,
    }),
    Trip.create({
      clientId: p4.id,
      cityId: c11.id,
    }),
    Trip.create({
      clientId: p5.id,
      cityId: c13.id,
    }),
    Trip.create({
      clientId: p5.id,
      cityId: c14.id,
    }),
    Trip.create({
      clientId: p5.id,
      cityId: c11.id,
    }),
    Trip.create({
      clientId: p5.id,
      cityId: c1.id,
    }),
    Trip.create({
      clientId: p5.id,
      cityId: c2.id,
    }),
  ]);

  // await p1.setCities([c2, c3, c4, c8, c10]);
  // await p2.setCities([c5, c6, c12]);
  // await p3.setCities([c1, c14, c7, c8, c9, c10, c12, c12]);
  // await p4.setCities([c2, c4, c7, c11]);
  // await p5.setCities([c13, c14, c11, c1, c2]);

  const allTrips = await Trip.findAll();
  allTrips.forEach(async (trip, idx) => {
    await trip.update({ date: faker.date.future() });
    idx % 3 === 0 ? await trip.update({ purpose: "business" }) : "";
  });
};

module.exports = seed;
