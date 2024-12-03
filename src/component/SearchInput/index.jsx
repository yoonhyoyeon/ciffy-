import styles from './index.module.css';

const SearchInput = ({value, setValue, onSubmit, placeholder}) => {
    return (
        <div className={styles.container}>
            <input 
                placeholder={placeholder} 
                value={value} 
                onChange={(e) => { setValue(e.target.value) }}
                onKeyDown={(e) => { if(e.key==="Enter") onSubmit(); }} 
            />
            <img onClick={(e) => { onSubmit(); }}src="/images/search-icon.png" />
        </div>
    )
}

export default SearchInput;