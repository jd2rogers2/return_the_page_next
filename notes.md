- prior misunderstandings
  - there would be a server and routes i could write
    - instead we can access DBs directly in SSR components because, yep, they're on the server side


- `npx create-next-app@latest app_name`
- next has its own routing lib so no react router
- routing based on convention
  - use folders as url path i.e. users/page.tsx == /users
  - and /users/new/page.tsx == /users/new
  - and /users/loading.tsx shows during async calls
    - can still use Suspense wrapper component as well
  - and /users/[id]/page.tsx for /users/:id
    - get id via auto `params` prop
    - and /users/[id]/not-found.tsx
      - need to call `notFound` from id component
- has its own Link component
- components in /app are SSR components BY DEFAULT
- /app/components/ by convention not made a URL
  - but still SSR
- add a `'use client';` to top of file to make it client side rendered
  - aim to only do this with click handling components
  - would get error if event handlers in SSR component
  - keep them small to increase SSR for SEO, server processing, bundle size, etc/=.
- other option to add `'use server';` in handler of SSR component to make req run on server
  - use `revalidatePath` after req to rerender component
    - (rerender is streamed in not page refresh)
- fetching data
  - in SSR component
    - can fetch direct in component body
    - make component async
    - will get data on server side
- RootLayout component is base template
- caching
  - auto caches heavily
  - doesn't refetch on rerender (because it doesn't rerender or cuz it's cached?)
  - difference between dev and prod
  - complex - will learn as i go
- middleware
  - src/app/middleware.ts
  - middleware funciton in there
  - import NextRequest from next
  - good place for auth
  - use `config = { matcher: ['url'] }` for selective paths
- hosting
  - anywhere node could run


resources:
- mosh
  - great for basics, routing, convention, install/start, server vs client explanations
  - https://www.youtube.com/watch?v=ZVnjOPwW4ZA

- bytegrad
  - good for other server vs client patterns, cacheing explanation, middleware, suspence and streaming
    - cool hostinger/nginx hosting setup
    - uses prisma.io, looks cool
  - https://www.youtube.com/watch?v=vwSlYG7hFk0

