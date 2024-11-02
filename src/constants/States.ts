// src/constants/States.ts

export interface GermanState {
    id: string;
    name: string;
  }
  
  export const germanStates: GermanState[] = [
    { id: 'bw', name: 'Baden-Württemberg' },
    { id: 'by', name: 'Bayern' },
    { id: 'be', name: 'Berlin' },
    { id: 'bb', name: 'Brandenburg' },
    { id: 'hb', name: 'Bremen' },
    { id: 'hh', name: 'Hamburg' },
    { id: 'he', name: 'Hessen' },
    { id: 'mv', name: 'Mecklenburg-Vorpommern' },
    { id: 'ni', name: 'Niedersachsen' },
    { id: 'nw', name: 'Nordrhein-Westfalen' },
    { id: 'rp', name: 'Rheinland-Pfalz' },
    { id: 'sl', name: 'Saarland' },
    { id: 'sn', name: 'Sachsen' },
    { id: 'st', name: 'Sachsen-Anhalt' },
    { id: 'sh', name: 'Schleswig-Holstein' },
    { id: 'th', name: 'Thüringen' },
  ];
  
  // Helper function to get state by ID
  export const getStateById = (id: string): GermanState | undefined => {
    return germanStates.find(state => state.id === id);
  };
  
  // Helper function to get state by name
  export const getStateByName = (name: string): GermanState | undefined => {
    return germanStates.find(state => state.name === name);
  };
  