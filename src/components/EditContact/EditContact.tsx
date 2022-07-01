import React, { FC, useState } from "react";

interface Contact {
  id: number,
  name: string,
  email:string
}

interface EditContactProps {
savedContact: Contact
}

export const EditContact: FC<EditContactProps> = (props) => {
  return (
    <EditForm
      {...props}
      onSave={(contact: Contact) => {}}
      key={props.savedContact.id}
    />
  );
}


interface EditFormProps extends EditContactProps {
  onSave: (contact: Contact) => void
}

const EditForm: FC<EditFormProps> = ({ savedContact, onSave }) =>  {
  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);

  return (
    <section>
      <label>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{' '}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <button onClick={() => {
        const updatedData = {
          id: savedContact.id,
          name: name,
          email: email
        };
        onSave(updatedData);
      }}>
        Save
      </button>
      <button onClick={() => {
        setName(savedContact.name);
        setEmail(savedContact.email);
      }}>
        Reset
      </button>
    </section>
  );
}