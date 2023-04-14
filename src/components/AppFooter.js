import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
      MyAdmin<br/>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
          <span className="ms-1">&copy; 2023 Ricky Djunaidy</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
