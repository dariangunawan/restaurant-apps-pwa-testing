import Home from '../views/pages/home';
import Favorite from '../views/pages/favorites';
import Detail from '../views/pages/detail';

const routes = {
    '/': Home,
    '/home': Home,
    '/favorites': Favorite,
    '/detail/:id': Detail,
};

export default routes;