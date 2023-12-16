import { ContactList } from 'components/Contacts/ContactList';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

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
