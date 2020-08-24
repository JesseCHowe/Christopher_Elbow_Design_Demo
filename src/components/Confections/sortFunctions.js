const sortFunctions = {
  default: {
    name: "Default",
    func: (a, b) => {
      if (a.category2 < b.category2) {
        return -1;
      }
      if (a.category2 > b.category2) {
        return 1;
      }
      return 0;
    },
  },
  alphaDesc: {
    name: "A-Z",
    func: (a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    },
  },
  alphaAsc: {
    name: "Z-A",
    func: (a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    },
  },
  priceDesc: {
    name: "Highest Price",
    func: (a, b) => b.price - a.price
  },
  priceAsc: {
    name: "Lowest Price",
    func: (a, b) => a.price - b.price
  },
};

export default sortFunctions;
