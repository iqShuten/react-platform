import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwinterProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwinterProps) => {
  const { t, i18n } = useTranslation();

  const toogle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toogle}
    >
      {t('Язык')}
    </Button>
  );
};
