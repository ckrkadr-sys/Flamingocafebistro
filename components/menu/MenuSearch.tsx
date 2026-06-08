type MenuSearchProps = Readonly<{
  clearLabel: string;
  label: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder: string;
  value: string;
}>;

export function MenuSearch({
  clearLabel,
  label,
  onChange,
  onClear,
  placeholder,
  value,
}: MenuSearchProps) {
  return (
    <div className="menu-search">
      <label className="menu-search__label" htmlFor="menu-search">
        {label}
      </label>
      <div className="menu-search__control">
        <input
          className="menu-search__input"
          id="menu-search"
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type="search"
          value={value}
        />
        {value ? (
          <button
            className="menu-search__clear"
            onClick={onClear}
            type="button"
          >
            {clearLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}
