import { Input } from '@/components/input/input';
import styles from './form-info-template-styles.module.css';

export const FormInfoTemplate = () => {
  return (
    <form className={styles['form-info-template']}>
      <Input label="Nombre" name="name" type="text" />
    </form>
  );
};
