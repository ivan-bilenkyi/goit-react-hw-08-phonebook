import { ContactList } from 'components/Contacts/ContactList';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <PhonebookForm />
      <div>
        <h2>Contacts</h2>
        <ContactList />
      </div>
    </div>
  );
}
