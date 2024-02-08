import React from 'react';
import Input from '@/Components/Input/Input';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';

export default function PasswordInput({ ...rest }) {
  const [shown, setShown] = React.useState(false);

  const Icon = shown ? MdOutlineVisibility : MdOutlineVisibilityOff;

  return <Input icon={Icon} type={shown ? 'text' : 'password'} onIconClick={() => setShown(!shown)} {...rest} />;
}
