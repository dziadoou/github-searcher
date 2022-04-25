import React from "react"
import styled from "styled-components/macro"
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "react-query"
import { Form } from "./Form"
import { InvalidUsername } from "./InvalidUsername"
import { UserContent } from "./UserContent"
import { SuspenseSpinner } from "./Spinner"
import { ErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "./ErrorFallback"
import { validateUsername } from "../utils/validateUsername"

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

const queryClient = new QueryClient()

export function App() {
  const [username, setUsername] = React.useState("")
  const [wasValidated, setWasValidated] = React.useState(true)

  function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
    event.preventDefault()
    const value = event.currentTarget.elements.usernameInput.value
    const isValidated = validateUsername(value)
    if (isValidated) {
      setUsername(value)
      setWasValidated(true)
    } else {
      setWasValidated(false)
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} />
      {!wasValidated ? (
        <InvalidUsername />
      ) : (
        username !== "" && (
          <QueryErrorResetBoundary>
            <ErrorBoundary
              fallbackRender={({ error, resetErrorBoundary }) => (
                <ErrorFallback
                  errorMessage={error.message}
                  handleReset={() => resetErrorBoundary()}
                />
              )}
              onReset={() => setUsername("")}
              resetKeys={[username]}
            >
              <React.Suspense
                fallback={<SuspenseSpinner data-testid="suspense-spinner" />}
              >
                <UserContent username={username} />
              </React.Suspense>
            </ErrorBoundary>
          </QueryErrorResetBoundary>
        )
      )}
    </Container>
  )
}

function AppWithQueryProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}

const Container = styled.div`
  background: url("https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_960_720.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: linear-gradient(
    100deg,
    rgba(9, 51, 82, 1),
    rgba(0, 4, 31, 1)
  );
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default AppWithQueryProvider
