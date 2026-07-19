"use client";

import { useId, useRef } from "react";

type MenuSearchProps = Readonly<{
  clearLabel: string;
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
}>;

export function MenuSearch({
  clearLabel,
  label,
  onChange,
  placeholder,
  value,
}: MenuSearchProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="menu-search" role="search">
      <label className="menu-search__label" htmlFor={inputId}>
        {label}
      </label>
      <div className="menu-search__field">
        <svg
          aria-hidden="true"
          className="menu-search__icon"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            cx="11"
            cy="11"
            r="6.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="m16 16 4 4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
        <input
          autoComplete="off"
          className="menu-search__input"
          enterKeyHint="search"
          id={inputId}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          ref={inputRef}
          type="search"
          value={value}
        />
        {value ? (
          <button
            aria-label={clearLabel}
            className="menu-search__clear"
            onClick={() => {
              onChange("");
              inputRef.current?.focus();
            }}
            type="button"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
