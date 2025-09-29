// vitest-dom adds custom vitest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://testing-library.com/docs/ecosystem-vitest/
import '@testing-library/jest-dom';

// Mock window.scrollTo for tests
if (typeof window !== 'undefined') {
  window.scrollTo = () => {};
}
