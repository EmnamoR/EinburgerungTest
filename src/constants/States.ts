// src/constants/States.ts

export interface GermanState {
  id: string;
  name: string;
  flag: string;
}

export const germanStates: GermanState[] = [
  { id: 'bw', name: 'Baden-Württemberg', flag: '🟡⚫' },
  { id: 'by', name: 'Bayern', flag: '🔵⚪' },
  { id: 'be', name: 'Berlin', flag: '🔴⚪' },
  { id: 'bb', name: 'Brandenburg', flag: '🔴⚪' },
  { id: 'hb', name: 'Bremen', flag: '🔴⚪' },
  { id: 'hh', name: 'Hamburg', flag: '🔴' },
  { id: 'he', name: 'Hessen', flag: '🔴⚪' },
  { id: 'mv', name: 'Mecklenburg-Vorpommern', flag: '🔵⚪🔴' },
  { id: 'ni', name: 'Niedersachsen', flag: '⚪🔴' },
  { id: 'nw', name: 'Nordrhein-Westfalen', flag: '⚪🔴' },
  { id: 'rp', name: 'Rheinland-Pfalz', flag: '⚫🔴🟡' },
  { id: 'sl', name: 'Saarland', flag: '🔵⚪🔴' },
  { id: 'sn', name: 'Sachsen', flag: '⚪🟢' },
  { id: 'st', name: 'Sachsen-Anhalt', flag: '🟡⚫' },
  { id: 'sh', name: 'Schleswig-Holstein', flag: '🔵⚪🔴' },
  { id: 'th', name: 'Thüringen', flag: '⚪🔴' },
];

// Helper function to get state by ID
export const getStateById = (id: string): GermanState | undefined => {
  return germanStates.find(state => state.id === id);
};

// Helper function to get state by name
export const getStateByName = (name: string): GermanState | undefined => {
  return germanStates.find(state => state.name === name);
};
