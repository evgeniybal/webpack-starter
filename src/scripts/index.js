import '../styles/index.scss';
import '../app/app.module'; //do not remove this line

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');
