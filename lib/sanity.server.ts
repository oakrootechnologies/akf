// MOCK SANITY CLIENT FOR STANDALONE DEMO
// This file replaces the actual Sanity client to bypass backend dependencies.

const mockClient = {
  fetch: async (query: string, params: any) => {
    console.log('MOCK SANITY FETCH:', query, params);
    return []; // Return empty array by default
  },
  create: async (doc: any) => {
    console.log('MOCK SANITY CREATE:', doc);
    return { ...doc, _id: 'mock-id-' + Date.now() };
  },
  patch: (id: string) => ({
    set: (data: any) => ({
      commit: async () => {
        console.log('MOCK SANITY PATCH:', id, data);
        return { _id: id, ...data };
      }
    }),
    unset: (fields: any) => ({
      commit: async () => ({})
    })
  }),
  delete: async (id: string) => {
    console.log('MOCK SANITY DELETE:', id);
    return {};
  }
};

export const client = mockClient;
