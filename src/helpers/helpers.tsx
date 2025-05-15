/* Formateamos hora y fecha */
export function formatDateTime(fechaISO: string): string {
  const fecha = new Date(fechaISO);

  // Opciones de formato para fecha y hora
  const opciones: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true // Usa formato 24h, cambia a true si quieres 12h
  };

  // Formato local (ej: español)
  return fecha.toLocaleString('es-ES', opciones);
}

/* Validamos numero telefonico */
export const validPhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, ''); // Elimina todo lo que no sea dígito
  return /^\d{10}$/.test(cleanPhone);
};