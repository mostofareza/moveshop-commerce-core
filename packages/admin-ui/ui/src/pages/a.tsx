import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { useHotkeys } from "react-hotkeys-hook"
import { Route, Routes, useNavigate } from "react-router-dom"
import RouteContainer from "../components/extensions/route-container"
import RouteErrorElement from "../components/extensions/route-container/route-error-element"
import PrivateRoute from "../components/private-route"
import SEO from "../components/seo"
import Layout from "../components/templates/layout"
import Collections from "../domain/collections"
import Customers from "../domain/customers"
import Discounts from "../domain/discounts"
import GiftCards from "../domain/gift-cards"
import Inventory from "../domain/inventory"
import Oauth from "../domain/oauth"
import Orders from "../domain/orders"
import DraftOrders from "../domain/orders/draft-orders"
import PriceListRoute from "../domain/pricing"
import ProductCategories from "../domain/product-categories"
import ProductsRoute from "../domain/products"
import PublishableApiKeys from "../domain/publishable-api-keys"
import SalesChannels from "../domain/sales-channels"
import Settings from "../domain/settings"
import { useRoutes } from "../providers/route-provider"
import { isRoute } from "../utils/extensions"
import Home from "../domain/home"

const IndexPage = () => {
  const navigate = useNavigate()
  useHotkeys("g + o", () => navigate("/a/orders"))
  useHotkeys("g + p", () => navigate("/a/products"))

  return (
    <PrivateRoute>
      <DashboardRoutes />
    </PrivateRoute>
  )
}

const DashboardRoutes = () => {
  const { getTopLevelRoutes } = useRoutes()

  const injectedRoutes = getTopLevelRoutes() || []

  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <SEO title="Medusa" />
        <Routes>
          <Route path="oauth/:app_name" element={<Oauth />} />
          <Route path="products/*" element={<ProductsRoute />} />
          <Route path="product-categories/*" element={<ProductCategories />} />
          <Route path="collections/*" element={<Collections />} />
          <Route path="gift-cards/*" element={<GiftCards />} />
          <Route path="orders/*" element={<Orders />} />
          <Route path="draft-orders/*" element={<DraftOrders />} />
          <Route path="discounts/*" element={<Discounts />} />
          <Route path="customers/*" element={<Customers />} />
          <Route path="pricing/*" element={<PriceListRoute />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="sales-channels/*" element={<SalesChannels />} />
          <Route path="home/*" element={<Home />} />
          <Route path="content/*" element={<h1>Content</h1>} />
          <Route path="collection/*" element={<h1>Collection</h1>} />
          <Route path="analytics/*" element={<h1>Analytics</h1>} />
          <Route path="marketing/*" element={<h1>Marketing</h1>} />
          <Route path="online-store/*" element={<h1>Online Store</h1>} />
          <Route path="social-media-channels/*" element={<h1>Social Media channels</h1>} />
          <Route path="app-store/*" element={<h1>App Store</h1>} />
          <Route path="installed-apps/*" element={<h1>Installed Apps</h1>} />
          <Route
            path="publishable-api-keys/*"
            element={<PublishableApiKeys />}
          />
          <Route path="inventory/*" element={<Inventory />} />
          {injectedRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={`/${route.path}/*`}
                errorElement={
                  <RouteErrorElement
                    origin={isRoute(route) ? route.origin : ""}
                  />
                }
                element={<RouteContainer route={route} />}
              />
            )
          })}
        </Routes>
      </Layout>
    </DndProvider>
  )
}

export default IndexPage
