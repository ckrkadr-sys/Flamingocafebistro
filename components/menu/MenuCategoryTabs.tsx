"use client";

import { useEffect, useRef } from "react";

type MenuCategoryTabsProps = Readonly<{
  activeCategoryId: string;
  categories: readonly {
    id: string;
    targetId: string;
    title: string;
  }[];
  label: string;
  onSelectCategory: (categoryId: string) => void;
}>;

export function MenuCategoryTabs({
  activeCategoryId,
  categories,
  label,
  onSelectCategory,
}: MenuCategoryTabsProps) {
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navigation = navigationRef.current;
    const activeLink = navigation?.querySelector<HTMLElement>(
      '[aria-current="location"]',
    );

    if (!navigation || !activeLink) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    navigation.scrollTo({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      left:
        activeLink.offsetLeft -
        (navigation.clientWidth - activeLink.clientWidth) / 2,
      top:
        activeLink.offsetTop -
        (navigation.clientHeight - activeLink.clientHeight) / 2,
    });
  }, [activeCategoryId]);

  return (
    <nav
      aria-label={label}
      className="menu-category-tabs"
      ref={navigationRef}
    >
      <ol className="menu-category-tabs__list">
        {categories.map((category) => (
          <li className="menu-category-tabs__item" key={category.id}>
            <a
              aria-current={
                activeCategoryId === category.id ? "location" : undefined
              }
              className="menu-category-tabs__button"
              href={`#${category.targetId}`}
              onClick={(event) => {
                event.preventDefault();
                onSelectCategory(category.id);
              }}
            >
              <span className="menu-category-tabs__title">
                {category.title}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
