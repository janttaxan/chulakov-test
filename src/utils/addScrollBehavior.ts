export async function addScrollBehavior(): Promise<void> {
  if (!('scrollBehavior' in document.documentElement.style)) {
    await import('scroll-behavior-polyfill');
  }
}
