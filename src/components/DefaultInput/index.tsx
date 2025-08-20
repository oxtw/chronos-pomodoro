import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <div className={styles.inputGroup}>
        <label htmlFor={id}>{labelText}</label>
        <input className={styles.input} id={id} type={type} {...rest} />
      </div>
    </>
  );
}
