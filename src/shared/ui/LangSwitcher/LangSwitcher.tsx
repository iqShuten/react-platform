import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';

interface LangSwinterProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwinterProps) => {
  const { t, i18n } = useTranslation();

  const toogle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toogle}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};
