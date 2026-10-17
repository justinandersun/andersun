import * as React from 'react'

// Assembled in the browser so the address never appears in the built HTML.
const Email = ({ label, className }) => {
  const [address, setAddress] = React.useState(null)

  React.useEffect(() => {
    setAddress(['hello', 'andersun.com'].join('@'))
  }, [])

  if (!address) return <span className={className}>{label || 'hello at andersun dot com'}</span>

  return <a href={`mailto:${address}`} className={className}>{label || address}</a>
}

export default Email
