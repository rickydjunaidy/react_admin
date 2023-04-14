import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
      ASIA STATIONERY,<br/>
      JL. Kinibalu No.4, Banjarmasin
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
          <span className="ms-1">&copy; 2023 Ricky Djunaidy</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
