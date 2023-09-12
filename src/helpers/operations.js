export const calculateTotal = (adults, childrens) => {
  const priceAdults = {
    2: 2900,
    3: 2500,
    4: 2300,
  };

  let total = adults * priceAdults[adults] || 0;

  if (childrens > 0) {
    total -= childrens * 200;
  }

  return total;
};

export const calculatePercentage = (total) => {
  return (total * 15) / 100;
};

export const handleSumTotals = (numbers) => {
  let total = 0;
  numbers.forEach((room) => {
    total += room.total;
  });

  return total;
};

export const countPersons = (rooms) => {
  const personsCount = rooms.reduce(
    (acc, room) => acc + Number(room.persons),
    0
  );

  const childrenCount = rooms.reduce(
    (acc, room) => acc + Number(room.childrens),
    0
  );

  return {
    persons: personsCount,
    childrens: childrenCount,
  };
};