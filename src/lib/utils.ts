/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format phone number for WhatsApp
 */
export function formatWhatsAppNumber(number: string): string {
  return number.replace(/\D/g, '');
}

/**
 * Generate WhatsApp chat URL
 */
export function getWhatsAppUrl(
  number: string,
  message: string = 'Halo, saya tertarik dengan layanan Purtanindo'
): string {
  const formattedNumber = formatWhatsAppNumber(number);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
