import { AiOutlineUserDelete } from 'react-icons/ai';
import { Button, Item, List, Wrap } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contacts/operations';
import { ContactFilter } from 'components/ContactsFilter/ContactsFilter';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <ContactFilter />
      <List>
        {contacts.map(item => {
          return (
            <Item key={item.id}>
              {item.name}: <span>{item.phone}</span>
              <Button onClick={() => dispatch(removeContact(item.id))}>
                <AiOutlineUserDelete />
              </Button>
            </Item>
          );
        })}
      </List>
    </Wrap>
  );
};
