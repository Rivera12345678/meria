
import React, { Suspense } from 'react'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div >
   <Suspense fallback="Loading">
      <AppRoutes/>
      </Suspense>

    
    </div>
  )
}

export default App