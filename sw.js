// Service worker disabled. This file is intentionally empty to prevent 404s.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
