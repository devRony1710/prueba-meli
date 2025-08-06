import { Input } from '@/components/input/input';
import styles from './form-info-template-styles.module.css';
import { Selector } from '@/components/selector/selector';

export const FormInfoTemplate = () => {
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form className={styles['form-info-template']} onSubmit={handleOnSubmit}>
      <Input label="First Name" name="name" type="text" />
      <Selector />
      <Input label="Address" name="address" type="text" />
      <Input label="Phone" name="phone" type="text" maxLength={10}  />
    </form>
  );
};
