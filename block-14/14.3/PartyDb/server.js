const { selectAllFrom, selectAllFromAndOfType, joinTwoTables } = require('./config/orm');

// Display all party names
selectAllFrom('parties', (party_names) => party_names.forEach((party) => console.log(party.party_name)));

// Display all client names
selectAllFrom('clients', (client_names) => client_names.forEach((client) => console.log(client.client_name)));

// Display all grown-up parties
selectAllFromAndOfType('parties', 'party_type', 'grown-up', (parties) =>
    parties.forEach((party) => console.log(party.party_name))
);

// Display all parties and their owner
joinTwoTables('party_name', 'client_name', 'parties', 'clients', 'client_id', 'id', (row) =>
    console.log(row)
);
