import { Link } from 'react-router-dom';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.menu}>
        <Link className={s.mainLink} to="/products">
          Каталог
        </Link>
        <div className={s.rightLinks}>
          <Link to="/comparison">СРАВНЕНИЕ</Link>
          <Link className={s.accountLink} to="/account">
            Личный кабинет
            <img src="/account.svg" alt="account" />
          </Link>
        </div>
      </div>
    </header>
  );
};
