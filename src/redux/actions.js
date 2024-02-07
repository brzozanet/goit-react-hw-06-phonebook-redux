import { nanoid } from "nanoid";

export const addContact = (name, phone) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name,
      phone,
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: "contacts/deleteContact",
    payload: {
      id,
    },
  };
};

export const filteredContacts = (query) => {
  return {
    type: "filter/filteredContacts",
    payload: {
      query,
    },
  };
};
