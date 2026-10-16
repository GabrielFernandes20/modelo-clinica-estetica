import { company } from "./company";

export function whatsappLink(customMessage?: string): string {
  const message = customMessage ?? company.whatsappDefaultMessage;
  const cleanNumber = company.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
