import styles from './TextArea.module.css'

function TextArea({ textLabel, text, name, rows, placeholder, handleOnChange, value, readOnly }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{textLabel}:</label>
      <textarea 
        name={name}
        rows={rows}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        required
        readOnly={readOnly}
      >{text}</textarea>
    </div>
  )
}

export default TextArea