import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "../Button/Button";

interface LangSwinterProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwinterProps) => {
  const { t, i18n } = useTranslation();

  const toogle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      className={classNames(cls.LangSwinter, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toogle}
    >
      {t("Язык")}
    </Button>
  );
};
