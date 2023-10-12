const config = {
  screens: {
    Transaction: {
      screens: {
        AllTransactions: 'transactions',
      },
    },
    HomeStack: {
      initialRouteName: 'Home',
      screens: {
        DocuSign: 'esign',
      },
    },
  },
};

const linking = {
  prefixes: ['happyapp://'],
  config,
};

export default linking;
