import PropTypes from 'prop-types';
import { ListItem, Btn } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem key={id}>
      <p>
        {name}: {number}
      </p>
      <Btn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Btn>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
