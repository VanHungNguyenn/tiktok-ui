import classnames from 'classnames/bind'
import styles from './Popper.module.scss'

const cx = classnames.bind(styles)

const Wrapper = ({ children }) => {
	return <div className={cx('wrapper')}>Wrapper</div>
}

export default Wrapper
