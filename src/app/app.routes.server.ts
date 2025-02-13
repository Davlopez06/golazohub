import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'leagues',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'leagues/:id',
    renderMode: RenderMode.Client
  }
];
