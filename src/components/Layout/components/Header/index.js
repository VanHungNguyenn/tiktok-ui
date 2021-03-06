import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleXmark,
	faMagnifyingGlass,
	faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import images from '~/assets/images'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
	const [searchResult, setSearchResult] = useState([])

	useEffect(() => {
		setTimeout(() => {
			setSearchResult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
		}, 0)
	}, [])

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				{/* Logo */}
				<div className={cx('logo')}>
					<img src={images.logo} alt='tiktok' />
				</div>
				{/* Search */}
				<Tippy
					interactive={true}
					visible={searchResult.length > 0}
					render={(attrs) => (
						<div
							className={cx('search-result')}
							tabIndex='-1'
							{...attrs}
						>
							<PopperWrapper>Results</PopperWrapper>
						</div>
					)}
				>
					<div className={cx('search')}>
						<input
							type='text'
							placeholder='Search accounts and videos'
							spellCheck={false}
						/>
						<button className={cx('clear')}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
						<FontAwesomeIcon
							className={cx('loading')}
							icon={faSpinner}
						/>
						<button className={cx('search-btn')}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
				</Tippy>
				<div className={cx('action')}></div>
			</div>
		</header>
	)
}

export default Header
