export function composeInquiry({ name = '', contact = '', message = '', service = '' } = {}) {
  if (!name.trim()) throw new Error('Укажите имя');
  if (!contact.trim()) throw new Error('Укажите контакт для связи');
  const subject = service.trim() ? `Обсуждение проекта — ${service.trim()}` : 'Обсуждение строительного проекта';
  const body = `Здравствуйте! Хочу обсудить проект.\n\nИмя: ${name.trim()}\nКонтакт: ${contact.trim()}\n${service ? `Направление: ${service.trim()}\n` : ''}\n${message.trim()}`;
  return `mailto:psc.monolit@mail.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
