import { useEffect, useRef, useState } from 'react';
import { composeInquiry } from './inquiry.mjs';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
const photos = { warehouse: asset('images/warehouse.webp'), construction: asset('images/construction.webp'), noise: asset('images/noise-barriers.webp') };
const services = [
  { title: 'Строительство зданий', short: 'Промышленные, общественные и жилые объекты', intro: 'Комплексное выполнение работ в области строительства зданий и сооружений различного назначения.', items: ['Общественные и административные здания', 'Промышленные и жилые объекты', 'Организация строительного процесса'], image: photos.construction },
  { title: 'Складские комплексы', short: 'Строительство складов различных типов', intro: 'Проектирование и строительство складских объектов с учётом назначения здания и требований заказчика.', items: ['Обсуждение задачи и исходной документации', 'Определение состава строительных работ', 'Строительство складов различных типов'], image: photos.warehouse },
  { title: 'Генподряд и субподряд', short: 'Организация работ и выполнение отдельных этапов', intro: 'Участвуем в строительстве крупных объектов в роли генерального подрядчика и субподрядчика. Состав работ определяется задачами проекта.', items: ['Организация строительного процесса', 'Координация работ на объекте', 'Выполнение отдельных строительных этапов'], image: photos.construction },
  { title: 'Шумозащитные экраны', short: 'Проектирование и монтаж', intro: 'Выполняем работы по проектированию и устройству шумозащитных экранов для транспортной инфраструктуры, промышленных объектов и защиты прилегающих территорий.', items: ['Проектирование решений под условия объекта', 'Подготовка основания и установка несущих конструкций', 'Монтаж шумозащитных панелей'], image: photos.noise, accent: true },
];
const otherServices = ['Малоэтажное строительство', 'Снос и демонтаж зданий', 'Организация строительства', 'Функции технического заказчика'];
const documents = [
  { title: 'Свидетельство о регистрации', href: 'http://psc-monolit.ru/wp-content/uploads/2018/07/Свидетельство.pdf' },
  { title: 'Устав компании', href: 'http://psc-monolit.ru/wp-content/uploads/2025/04/Устав-Монолит-от-27.02.2024.pdf' },
  { title: 'Выписка из СРО', href: 'http://psc-monolit.ru/wp-content/uploads/2018/07/Выписка-из-СРО.pdf' },
];
function Icon({ name = 'arrow-right', className = '' }) {
  return <img className={`icon ${className}`} src={asset(`icons/${name}.svg`)} alt="" aria-hidden="true" width="24" height="24" />;
}
function Brand() {
  return <a href="#top" className="brand" aria-label="ПСК Монолит — на главную"><img src={asset('images/logo.png')} width="56" height="56" alt="" /><span>ПСК МОНОЛИТ<small>Промышленно-строительная компания</small></span></a>;
}
function TextButton({ children, onClick, className = '' }) {
  return <button type="button" className={`text-link ${className}`} onClick={onClick}>{children}<Icon /></button>;
}
function ContactForm({ service = '' }) {
  const [error, setError] = useState('');
  const [draft, setDraft] = useState('');
  function prepare(event) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    try { setDraft(composeInquiry({ ...fields, service })); setError(''); }
    catch (issue) { setError(issue.message); setDraft(''); }
  }
  return <>
    <p className="dialog-intro">Расскажите о задаче — обсудим состав работ и исходные данные.</p>
    <div className="direct-contacts"><a href="tel:+74959536439"><Icon name="phone" />+7 (495) 953-64-39</a><a href="mailto:psc.monolit@mail.ru"><Icon name="mail" />psc.monolit@mail.ru</a></div>
    <form onSubmit={prepare} onChange={() => { setDraft(''); setError(''); }}>
      {service && <p className="form-service">Направление: <strong>{service}</strong></p>}
      <label>Как к вам обращаться<input name="name" autoComplete="name" maxLength="100" required placeholder="Ваше имя" /></label>
      <label>Телефон или электронная почта<input name="contact" autoComplete="email" maxLength="160" required placeholder="Для обратной связи" /></label>
      <label>О проекте <span className="optional">необязательно</span><textarea name="message" rows="3" maxLength="4000" placeholder="Тип объекта, регион, необходимые работы" /></label>
      <p className="form-note">Подготовим письмо в вашей почтовой программе. При необходимости к нему можно приложить ТЗ. Данные с этой формы не отправляются на сервер сайта.</p>
      {error && <p role="alert" className="form-error">{error}</p>}
      {!draft ? <button className="button button-yellow" type="submit">Подготовить письмо<Icon /></button> : <div className="draft-ready" role="status"><p>Черновик готов. Откройте его в почтовой программе и отправьте письмо.</p><a className="button button-yellow" href={draft}>Открыть письмо<Icon /></a></div>}
    </form>
  </>;
}
function Modal({ modal, close, openContact }) {
  const ref = useRef(null);
  const returnFocus = useRef(document.activeElement);
  useEffect(() => () => {
    const trigger = returnFocus.current;
    if (trigger?.isConnected && trigger.getClientRects().length) trigger.focus();
    else document.querySelector('.menu-button')?.focus();
  }, []);
  useEffect(() => {
    const dialog = ref.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; };
  }, [modal]);
  const isContact = modal.type === 'contact';
  const isDocuments = modal.type === 'documents';
  const isAll = modal.type === 'all';
  const title = isContact ? 'Обсудим ваш объект' : isDocuments ? 'Документы компании' : isAll ? 'Наши направления' : modal.data.title;
  function containFocus(event) {
    if (event.key !== 'Tab') return;
    const controls = [...ref.current.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled])')].filter((element) => element.getClientRects().length);
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && event.target === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && event.target === last) { event.preventDefault(); first?.focus(); }
  }
  return <dialog ref={ref} className={`dialog ${isContact ? 'contact-dialog' : ''}`} aria-labelledby="dialog-title" onKeyDown={containFocus} onCancel={close} onClose={(event) => { if (!event.currentTarget.open) close(); }} onClick={(event) => { if (event.target === ref.current) close(); }}>
    <div className="dialog-body"><button type="button" className="close-button" onClick={close} aria-label="Закрыть окно"><Icon name="x" /></button>
      <p className="eyebrow">ПСК «МОНОЛИТ»</p><h2 id="dialog-title">{title}</h2>
      {isContact ? <ContactForm service={modal.service} /> : isDocuments ? <>
        <p className="dialog-intro">Документы, опубликованные на действующем сайте компании.</p>
        <div className="document-list">{documents.map((doc) => <a href={encodeURI(doc.href)} target="_blank" rel="noopener noreferrer" key={doc.title}><span>{doc.title}<small>PDF · открыть документ</small></span><Icon name="download" /></a>)}</div>
        <p className="form-note">Для получения актуального комплекта документов свяжитесь с компанией.</p><TextButton onClick={() => openContact('Документы компании')}>Запросить документы</TextButton>
      </> : isAll ? <><p className="dialog-intro">От отдельных строительных работ до организации строительства объекта.</p><ul className="all-services">{[...services.map((item) => item.title), ...otherServices].map((title) => <li key={title}>{title}</li>)}</ul><button className="button button-yellow" onClick={() => openContact('Выбор направления')}>Обсудить задачу<Icon /></button></> : <>
        <img className="dialog-photo" src={modal.data.image} alt={modal.data.title} /><small className="photo-caption">Иллюстративное изображение</small>
        <p className="dialog-intro">{modal.data.intro}</p><ul className="scope-list">{modal.data.items.map((item) => <li key={item}>{item}</li>)}</ul>
        <button className="button button-yellow" onClick={() => openContact(modal.data.title)}>Обсудить проект<Icon /></button>
      </>}
    </div>
  </dialog>;
}
export function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modal, setModal] = useState(null);
  const openContact = (service = '') => { setMenu(false); setModal({ type: 'contact', service }); };
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!menu) return;
    const onKey = (event) => { if (event.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menu]);
  useEffect(() => {
    const sections = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); observer.unobserve(entry.target); }
    }), { threshold: 0.06 });
    sections.forEach((section) => { if (section.getBoundingClientRect().top > window.innerHeight) section.classList.add('reveal-pending'); observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  const navigate = () => setMenu(false);
  return <>
    <a className="skip-link" href="#main">Перейти к содержимому</a>
    <header className={`header ${scrolled || menu ? 'header-solid' : ''}`}>
      <div className="container header-inner"><Brand />
        <nav aria-label="Основная навигация" id="main-navigation" className={`navigation ${menu ? 'navigation-open' : ''}`}>
          <a href="#services" onClick={navigate}>Услуги</a><a href="#projects" onClick={navigate}>Объекты</a><a href="#about" onClick={navigate}>О компании</a>
          <button onClick={() => { setMenu(false); setModal({ type: 'documents' }); }}>Документы</button><a href="#contacts" onClick={navigate}>Контакты</a>
          <a className="mobile-phone" href="tel:+74959536439">+7 (495) 953-64-39</a>
        </nav>
        <button className="button header-contact" onClick={() => openContact()}>Связаться<Icon name="arrow-up-right" /></button>
        <button className="menu-button" aria-label={menu ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menu} aria-controls="main-navigation" onClick={() => setMenu(!menu)}><Icon name={menu ? 'x' : 'menu-2'} /></button>
      </div>
    </header>
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="container hero-content">
          <p className="hero-eyebrow"><span />Строительство и генеральный подряд</p>
          <h1 id="hero-title">Строительство,<br /><span>за которым <br className="mobile-title-break" />стоит опыт.</span></h1>
          <div className="hero-bottom"><p>Промышленные, общественные и жилые объекты.<br className="desktop-break" /> От отдельных работ до генерального подряда.</p>
            <div className="hero-actions"><button className="button button-dark" onClick={() => openContact()}>Обсудить проект<Icon name="arrow-up-right" /></button><a className="hero-scroll" href="#about" aria-label="Перейти к разделу о компании"><Icon /></a></div>
          </div>
        </div>
        <figure className="hero-figure container"><div className="hero-photo-frame"><img className="hero-photo" src={photos.warehouse} alt="Современное промышленное здание" fetchPriority="high" width="1672" height="941" /></div><figcaption><span>Масштаб. Ответственность. Результат.</span><a href="#projects">Объекты и направления<Icon name="arrow-up-right" /></a></figcaption></figure>
      </section>
      <section className="about section container" id="about" aria-labelledby="about-title">
        <div className="about-heading" data-reveal><div className="section-label"><span className="section-index">01</span><span className="eyebrow">О компании</span></div>
          <h2 id="about-title">Комплексное строительство.<br />{' '}Генеральный подряд.</h2>
        </div>
        <div className="about-layout" data-reveal><figure className="about-figure"><img src={photos.construction} alt="Железобетонный каркас здания и башенный кран" width="1000" height="1200" loading="lazy" /><figcaption>Строительство зданий и сооружений</figcaption></figure><div className="about-copy">
          <p className="company-label">ПСК «МОНОЛИТ»</p>
          <div className="about-description"><p><strong>Промышленно-строительная компания «МОНОЛИТ»</strong> осуществляет комплексное выполнение работ и оказание услуг в области строительства зданий и сооружений общественного, административно-хозяйственного и жилого назначения.</p><p>Выступает в роли генерального подрядчика при строительстве крупных объектов капитального строительства со сложной инфраструктурой.</p></div>
          <TextButton onClick={() => setModal({ type: 'about', data: { title: 'ПСК «МОНОЛИТ»', image: photos.construction, intro: 'Компания выполняет строительные работы на объектах общественного, административно-хозяйственного, промышленного и жилого назначения.', items: ['Комплексное выполнение строительных работ', 'Функции генерального подрядчика на крупных объектах', 'Работа с объектами со сложной инфраструктурой'] } })}>Подробнее о компании</TextButton>
        </div></div>
        <div className="sectors"><span>Общественные объекты</span><span>Административные здания</span><span>Жилое строительство</span></div>
      </section>
      <section className="services section" id="services" aria-labelledby="services-title"><div className="container">
        <div className="section-label" data-reveal><span className="section-index">02</span><span className="eyebrow">Направления работ</span></div>
        <div className="section-heading" data-reveal><h2 id="services-title">Наши направления</h2><p>Выполняем строительные работы<br className="desktop-break" /> и организуем реализацию проектов —<br className="desktop-break" /> от отдельных этапов до генерального подряда.</p></div>
        <div className="service-list" data-reveal>{services.map((item, index) => <button className={`service-row ${item.accent ? 'service-accent' : ''}`} key={item.title} onClick={() => setModal({ type: 'service', data: item })} aria-label={`Подробнее: ${item.title}`}><span className="service-number" aria-hidden="true">0{index + 1}</span><span className="service-text"><strong>{item.title}{item.accent && <span className="service-dot" aria-hidden="true" />}</strong><span>{item.short}</span></span><span className="service-arrow"><Icon name="arrow-up-right" /></span></button>)}<TextButton onClick={() => setModal({ type: 'all' })}>Все услуги</TextButton></div>
      </div></section>
      <section className="projects section container" id="projects" aria-labelledby="projects-title"><div className="section-label" data-reveal><span className="section-index">03</span><span className="eyebrow">Объекты</span></div><div className="section-heading" data-reveal><h2 id="projects-title">Опыт крупных<br />проектов</h2><p>Строительство складских комплексов, работа в роли генерального подрядчика и субподрядчика.</p></div>
        <div className="project-grid" data-reveal>{[services[1], services[0]].map((item, index) => <article className="project" key={item.title}><button className="project-image" onClick={() => setModal({ type: 'project', data: item })} aria-label={`О направлении: ${item.title}`}><img src={item.image} alt={item.title} loading="lazy" width="900" height="600" /><span className="project-image-action"><Icon name="arrow-up-right" /></span></button><div className="project-description"><span className="project-category">0{index + 1} / Генподряд и субподряд</span><h3>{item.title === 'Складские комплексы' ? 'Складские объекты' : 'Строительство зданий'}</h3><TextButton onClick={() => setModal({ type: 'project', data: item })}>Подробнее о направлении</TextButton></div></article>)}</div><p className="illustration-note">Фотографии иллюстрируют направления работ.</p>
      </section>
    </main>
    <footer className="footer" id="contacts"><div className="container"><div className="section-label"><span className="section-index">04</span><span className="eyebrow">Контакты</span></div><div className="footer-top" data-reveal><div><h2>Обсудим<br />ваш объект.</h2><button className="footer-cta" onClick={() => openContact()}>Связаться с нами<span><Icon name="arrow-up-right" /></span></button></div><div className="footer-contacts"><p className="eyebrow">ПСК «МОНОЛИТ»</p><a className="footer-phone" href="tel:+74959536439">+7 (495) 953-64-39</a><a className="footer-email" href="mailto:psc.monolit@mail.ru">psc.monolit@mail.ru<Icon name="arrow-up-right" /></a><p>Москва, ул. Большая Полянка, 3/9<br /><span>Центральный офис</span></p></div></div>
        <div className="footer-bottom"><Brand /><div className="footer-links"><button onClick={() => setModal({ type: 'documents' })}>Документы</button><a href="#about">О компании</a><a href="#top">Наверх<Icon name="arrow-up-right" /></a></div></div><div className="footer-fine"><span>© {new Date().getFullYear()} ПСК «МОНОЛИТ»</span><span>Изображения объектов иллюстративные</span></div>
      </div></footer>
    {modal && <Modal modal={modal} close={() => setModal(null)} openContact={openContact} />}
  </>;
}
