import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';

test('contact composer is available for a working email handoff', async () => {
  assert.ok(existsSync(new URL('../src/inquiry.mjs', import.meta.url)), 'Contact composer has not been implemented');
});

test('a Russian project inquiry preserves contact and special characters in the email draft', async () => {
  const { composeInquiry } = await import('../src/inquiry.mjs');
  const href = composeInquiry({ name: 'Иван Петров', contact: '+7 900 123-45-67', message: 'Склад 1 & 2\nЕсть проект', service: 'Генподряд' });
  assert.ok(href.startsWith('mailto:psc.monolit@mail.ru?'));
  const query = new URLSearchParams(href.slice(href.indexOf('?') + 1));
  assert.equal(query.get('subject'), 'Обсуждение проекта — Генподряд');
  assert.ok(query.get('body').includes('Иван Петров'));
  assert.ok(query.get('body').includes('+7 900 123-45-67'));
  assert.ok(query.get('body').includes('Склад 1 & 2\nЕсть проект'));
  assert.equal(query.has('bcc'), false);
});

test('missing name or contact never produces an apparently successful inquiry', async () => {
  const { composeInquiry } = await import('../src/inquiry.mjs');
  assert.throws(() => composeInquiry({ name: ' ', contact: 'test@example.com' }), /имя/i);
  assert.throws(() => composeInquiry({ name: 'Иван', contact: ' ' }), /контакт/i);
});

test('message text cannot introduce email recipient headers', async () => {
  const { composeInquiry } = await import('../src/inquiry.mjs');
  const href = composeInquiry({ name: 'Иван', contact: 'test@example.com', message: '\r\nbcc: other@example.com&bcc=hidden@example.com' });
  const query = new URLSearchParams(href.slice(href.indexOf('?') + 1));
  assert.equal(query.has('bcc'), false);
  assert.equal(query.has('cc'), false);
  assert.equal(query.get('subject'), 'Обсуждение строительного проекта');
  assert.ok(query.get('body').includes('&bcc=hidden@example.com'));
});
