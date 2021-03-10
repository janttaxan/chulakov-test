export function checkVisibleElement(target: HTMLElement): boolean {

  // Позиция элемента
  const targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
  };

  // Позиция окна
  const windowPosition = {
    top: window.pageYOffset,
    bottom: window.pageYOffset + document.documentElement.clientHeight,
  };

  return targetPosition.bottom > (windowPosition.top + target.clientHeight / 2) && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < (windowPosition.bottom - target.clientHeight / 2); // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
}
