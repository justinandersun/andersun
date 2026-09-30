import * as React from 'react'

// Assembled in the browser so the address never appears in the built HTML.
const Email = () => {
  const [address, setAddress] = React.useState(null)

  React.useEffect(() => {
    setAddress(['hello', 'andersun.com'].join('@'))
  }, [])

  if (!address) return <span>hello at andersun dot com</span>

  return <a href={`mailto:${address}`}>{address}</a>
}

export default Email
