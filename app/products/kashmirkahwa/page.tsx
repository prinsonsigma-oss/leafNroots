'use client'

import ProductDetailPage from '@/components/products/ProductDetailPage'
import { getProductBySlug } from '@/data/products'

export default function KashmirKahwaPage() {
  const product = getProductBySlug('kashmirkahwa')!
  return <ProductDetailPage product={product} />
}
