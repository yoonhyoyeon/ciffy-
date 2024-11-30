import styles from './index.module.css';
const SortSelect = ({children, sort, setSort, disabled}) => {
    return (
        <select disabled={disabled} className={styles.select} value={sort} onChange={(e) => { setSort(e.target.value) }}>
            {children}
        </select>
    )
}

export default SortSelect;