import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  HTMLInputTypeAttribute, InputHTMLAttributes, memo, useEffect, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const [isFocuse, setIsFocuse] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  useEffect(() => {
    if (autofocus) { setIsFocuse(true); }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlure = () => {
    setIsFocuse(false);
  };

  const onFocuse = () => {
    setIsFocuse(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placehodler}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocuse}
          onBlur={onBlure}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocuse && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
});
