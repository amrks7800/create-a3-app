import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./router/index.tsx"

/*
  this is a starter template packed with basic necessary libs and packages to
  start the react project as simple as possible.

  it is also prepared with all the routing configuration using react-router-dom v6
  redux configuration with the query, and finally tailwind css.

  you can optionally add a component library like chakra ui, shadcn ui if you feel like it🤗
  (personal recommendation).

  happy hacking 😍😎.
*/

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
