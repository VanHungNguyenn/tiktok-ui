import Home from '~/pages/Home'
import Following from '~/pages/Following'

const publicRoutes = [
	{
		path: '/',
		element: Home,
	},
	{
		path: '/following',
		element: Following,
	},
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
