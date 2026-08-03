'use client'

import ProductDetailPage from '@/components/products/ProductDetailPage'
import { getProductBySlug } from '@/data/products'

export default function DetoxPage() {
  const product = getProductBySlug('detox')!
  return <ProductDetailPage product={product} />
}
