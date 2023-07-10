import { OptionsType, SelectsConfigType } from "../types";

const statusOptions: OptionsType[] = [
  { value: 'Alive', label: 'Alive' },
  { value: 'Dead', label: 'Dead' },
  { value: 'Unknown', label: 'Unknown' }
];

const genderOptions: OptionsType[] = [
  { value: 'Female', label: 'Female' },
  { value: 'Male', label: 'Male' },
  { value: 'Genderless', label: 'Genderless' },
  { value: 'Unknown', label: 'Unknown' }
];

const speciesOptions: OptionsType[] = [
  { value: "Human", label: "Human" },
  { value: "Alien", label: "Alien" },
  { value: "Humanoid", label: "Humanoid" },
  { value: "Poopybutthole", label: "Poopybutthole" },
  { value: "Mythological", label: "Mythological" },
  { value: "Unknown", label: "Unknown" },
  { value: "Animal", label: "Animal" },
  { value: "Disease", label: "Disease" },
  { value: "Robot", label: "Robot" },
  { value: "Cronenberg", label: "Cronenberg" },
  { value: "Planet", label: "Planet" }
];

export const selectsConfig: SelectsConfigType[] = [
  { 
    id: 1, 
    placeholder: "Choose status...", 
    filter: "status",
    options: statusOptions
  },
  { 
    id: 2, 
    placeholder: "Choose gender...", 
    filter: "gender",
    options: genderOptions
  },
  { 
    id: 3, 
    placeholder: "Choose species...", 
    filter: "species",
    options: speciesOptions
  }
];