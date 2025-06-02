import '@testing-library/jest-dom';

// Mock para localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock para fetch
global.fetch = jest.fn();

// Configuración global para pruebas
beforeEach(() => {
  // Limpiar mocks antes de cada prueba
  jest.clearAllMocks();
  localStorage.clear();
  fetch.mockClear();
});
