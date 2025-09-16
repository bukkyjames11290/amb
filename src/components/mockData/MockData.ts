import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Donna Mary',
      email: 'd*@gmail.com',
      dateCreated: '9/2/2025', // m/d/y
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 100000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 30, 2025',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 130000.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'June 20, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'December 2, 2024',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 15, 2024',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'November 30, 2023',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2023',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'July 4, 2023',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2023',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'December 7, 2022',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 21800.0
      },
      {
        dateTime: 'September 20, 2022',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'June 22, 2022',
        description: 'Transfer fee - XXXXXX8647',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 22, 2022',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'December 18, 2021',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'September 9, 2021',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'November 23, 2020',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'September 4, 2020',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 42100.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer fee - XXXXXX2019',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'Joan Barbara Pryor',
      email: 'jb*@gmail.com',
      dateCreated: '9/6/2025', // m/d/y
      username: "JBpryor",
      password: "Amblessed@@098",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      isChecking: true,
      balance_usd: 40000.0,
      isSavings: false,
      saving_balance_usd: 0.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team here trustwcustomerservice@outlook.com for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'September 16, 2025',
        description: 'Wire Transfer from Automobile Company - XXXXXX1836',
        status: 'Pending',
        amount_usd: 8600000.0
      },
      {
        dateTime: 'December 15, 2022',
        description: 'Vat fee - XXXXXX7924',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'December 15, 2022',
        description: 'Wire Transfer from Naomi Caldwell - XXXXXX2233',
        status: 'Success',
        amount_usd: 3500.33
      },
      {
        dateTime: 'June 10, 2022',
        description: 'Vat fee - XXXXXX1789',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'June 10, 2022',
        description: 'Wire Transfer from Naomi Caldwell - XXXXXX2233',
        status: 'Success',
        amount_usd: 2850.34
      },
      {
        dateTime: 'April 15, 2022',
        description: 'Vat fee - XXXXXX3747',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'April 15, 2022',
        description: 'Wire Transfer from Marcus Bennett - XXXXXX8644',
        status: 'Success',
        amount_usd: 2600.0
      },
      {
        dateTime: 'August 10, 2021',
        description: 'Vat fee - XXXXXX2841',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'August 10, 2021',
        description: 'Wire Transfer from Marcus Bennett - XXXXXX4347',
        status: 'Success',
        amount_usd: 2600.0
      },
      {
        dateTime: 'March 12, 2021',
        description: 'Vat fee - XXXXXX6139',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'March 12, 2021',
        description: 'Wire Transfer from Marcus Bennett - XXXXXX4721',
        status: 'Success',
        amount_usd: 2600.0
      },
      {
        dateTime: 'December 17, 2020',
        description: 'Vat fee - XXXXXX1953',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'December 17, 2020',
        description: 'Wire Transfer from Selena Myers - XXXXXX8392',
        status: 'Success',
        amount_usd: 2400.0
      },
      {
        dateTime: 'July 06, 2020',
        description: 'Vat fee - XXXXXX7204',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'July 06, 2020',
        description: 'Wire Transfer from Selena Myers - XXXXXX8392',
        status: 'Success',
        amount_usd: 2440.0
      },
      {
        dateTime: 'February 11, 2020',
        description: 'Vat fee - XXXXXX6327',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'February 11, 2020',
        description: 'Wire Transfer from Selena Myers - XXXXXX8392',
        status: 'Success',
        amount_usd: 2350.0
      },
      {
        dateTime: 'October 22, 2019',
        description: 'Vat fee - XXXXXX5086',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'October 22, 2019',
        description: 'Wire Transfer from Darius Cole - XXXXXX1938',
        status: 'Success',
        amount_usd: 3300.0
      },
      {
        dateTime: 'May 14, 2019',
        description: 'Vat fee - XXXXXX6019',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'May 14, 2019',
        description: 'Wire Transfer from Darius Cole - XXXXXX1938',
        status: 'Success',
        amount_usd: 3000.0
      },
      {
        dateTime: 'November 05, 2018',
        description: 'Vat fee - XXXXXX2442',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'November 05, 2018',
        description: 'Wire Transfer from Kayla Thornton - XXXXXX5627',
        status: 'Success',
        amount_usd: 2000.0
      },
      {
        dateTime: 'July 18, 2018',
        description: 'Vat fee - XXXXXX8375',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'July 18, 2018',
        description: 'Wire Transfer from Kayla Thornton - XXXXXX5627',
        status: 'Success',
        amount_usd: 2000.0
      },
      {
        dateTime: 'March 09, 2018',
        description: 'Vat fee - XXXXXX1683',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'March 09, 2018',
        description: 'Wire Transfer from Kayla Thornton - XXXXXX5627',
        status: 'Success',
        amount_usd: 2000.0
      },
      {
        dateTime: 'December 20, 2017',
        description: 'Vat fee - XXXXXX4427',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'December 20, 2017',
        description: 'Wire Transfer from Lionel Reese - XXXXXX4470',
        status: 'Success',
        amount_usd: 2460.0
      },
      {
        dateTime: 'June 15, 2017',
        description: 'Vat fee - XXXXXX3261',
        status: 'Success',
        amount_usd: -85.0
      },
      {
        dateTime: 'June 15, 2017',
        description: 'Wire Transfer from Lionel Reese - XXXXXX4470',
        status: 'Success',
        amount_usd: 2700.0
      }
    ]
  }
];
