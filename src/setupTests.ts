// src/setupTests.ts
import '@testing-library/jest-dom'; // Упрощенный импорт
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});