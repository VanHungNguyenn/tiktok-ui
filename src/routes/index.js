// Layouts
import { HeaderOnly } from '~/components/Layout'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

const publicRoutes = [
	{
		path: '/',
		element: Home,
	},
	{
		path: '/following',
		element: Following,
	},
	{
		path: '/upload',
		element: Upload,
		layout: HeaderOnly,
	},
	{
		path: '/search',
		element: Search,
	},
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
