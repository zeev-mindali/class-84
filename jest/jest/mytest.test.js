const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
    },
  };
  const desiredHouse = {
    bath: true,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      wallColor: expect.stringMatching(/white|yellow/),
    },
  };
  
  test('the house has my desired features', () => {
    expect(houseForSale).toMatchObject(desiredHouse);
  });