const jasmine = {
  createSpy: jest.fn().mockImplementation(() => jest.fn()),
};

global.jasmine = jasmine;
