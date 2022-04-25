import { rest } from "msw"
import * as React from "react"
import { setupServer } from "msw/node"
import { render } from "@testing-library/react"
import { QueryClientProvider, QueryClient } from "react-query"

export const setupMocks = (handlers = []) => {
  const server = setupServer(...handlers)
  beforeAll(() => {
    server.listen({ onUnhandledRequest: "bypass" })
  })
  beforeEach(() => {
    queryClient.clear()
    server.resetHandlers()
  })
  afterAll(() => {
    server.close()
  })
  return {
    returnsNoOfUserRepos: (username: string, numberOfRepos: number) =>
      server.use(
        rest.get(
          `https://api.github.com/users/${username}`,
          (req, res, ctx) => {
            return res(
              ctx.json({
                "public_repos": numberOfRepos,
              }),
            )
          },
        ),
      ),
    returnsRepositories: repositories => {
      server.use(
        rest.get(
          "https://api.github.com/search/repositories",
          (req, res, ctx) => {
            return res(
              ctx.json({
                "items": repositories,
              }),
            )
          },
        ),
      )
    },
    returnsUserNotFound: username => {
      server.use(
        rest.get(
          `https://api.github.com/users/${username}`,
          (req, res, ctx) => {
            return res(
              ctx.status(404),
              ctx.json({
                "message": "Not Found",
              }),
            )
          },
        ),
      )
    },
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export const renderComponent = (children: any) =>
  render(
    <React.Suspense fallback={<div>spinner</div>}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </React.Suspense>,
  )
