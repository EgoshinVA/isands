import { Link } from 'react-router-dom';
import s from './ErrorPage.module.scss';

export const ErrorPage = () => {
  return (
    <div className={s.errorPage}>
      <div className={s.content}>
        <h1>Ошибка</h1>
        <p>Страница не существует</p>
        <Link to="/" className={s.button}>
          На главную
        </Link>
      </div>
    </div>
  );
};
