import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>ErrorPage
      <h2>{err.status}  {err.statusText}</h2>
    </div>
  )
}

export default ErrorPage