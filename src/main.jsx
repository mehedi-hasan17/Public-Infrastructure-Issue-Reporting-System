import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { router } from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'

// ✅ Query Client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ✅ TanStack Query */}
    <QueryClientProvider client={queryClient}>
      {/* ✅ Auth Context */}
      <AuthProvider>
        {/* ✅ Router */}
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
