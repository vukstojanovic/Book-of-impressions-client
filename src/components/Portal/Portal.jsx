import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { ModalError } from '../ModalError'

export const Portal = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted ? createPortal(<ModalError />, document.querySelector('#modal')) : null
}

// export default Portal
