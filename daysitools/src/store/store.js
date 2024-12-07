import { create } from "zustand";

export const useCounterStore = create((set) => ({
  calendario: {
    Lunes: [],
    Martes: [],
    Miercoles: [],
    Jueves: [],
    Viernes: [],
    Sabado: [],
    Domingo: [],
  },

  setCalendario: (calendario) => set({ calendario: calendario }),

  changed: 1,
  setChanged: () => set((state) => ({ changed: state.changed + 1 })),

  calendarioNuevo: {
    Lunes: [],
    Martes: [],
    Miercoles: [],
    Jueves: [],
    Viernes: [],
    Sabado: [],
    Domingo: [],
  },

  setCalendarioNuevo: (nuevoCalendario) =>
    set({ calendarioNuevo: nuevoCalendario }),

  setDia: (dia, hora) =>
    set((state) => ({
      calendarioNuevo: {
        ...state.calendarioNuevo,
        [dia]: [...(state.calendarioNuevo[dia] || []), hora],
      },
    })),
  removeHora: (dia, hora) =>
    set((state) => ({
      calendarioNuevo: {
        ...state.calendarioNuevo,
        [dia]: state.calendarioNuevo[dia].filter((item) => item !== hora),
      },
    })),

  time: [],

  setTime: (hora) =>
    set((state) => ({
      time: [...state.time, hora],
    })),
}));
