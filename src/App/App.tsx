import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import Views from "../routes/Views"
import "./app.scss"

function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Views />
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
