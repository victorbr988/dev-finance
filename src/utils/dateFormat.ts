export function dateFormat(date: string) {
  const dateParse = new Date(date)

  // dd/mm/yyyy
  const fullYearFormat = new Intl.DateTimeFormat('pt-BR').format(dateParse);

  // ex: 12h34
  const fullHourFormat = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short'
  }).format(dateParse).replace(':', 'h');
  
  const fullDateFormat = `${fullYearFormat} ${fullHourFormat}`

  return fullDateFormat
};
