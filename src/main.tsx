import { routes } from '@generouted/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
// import '../i18n'

const router = createHashRouter(routes)

const future = {

  v7_startTransition: true,
  v7_normalizeFormMethod: true,
  v7_partialHydration: true,
  v7_relativeSplatPath: true,
  v7_skipActionErrorRevalidation: true,
} as any

// eslint-disable-next-line react-refresh/only-export-components
function Routes() {
  return (
    <RouterProvider
      router={router}
      future={future}
    />
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes></Routes>
  </React.StrictMode>,
)
// INFO: use following code to build app without hash router
//
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Routes } from '@generouted/react-router'
//
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Routes></Routes>
//   </React.StrictMode>,
// )
