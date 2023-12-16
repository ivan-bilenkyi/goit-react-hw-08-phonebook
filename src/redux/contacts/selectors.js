import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectAllContacts = state => state.contacts.items;
export const filter = state => state.filter.status;

export const selectVisibleContacts = createSelector(
  [selectAllContacts, filter],
  (contacts, filter) => {
    return contacts?.filter(el => {
      return el.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
